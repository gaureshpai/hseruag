import { createServer } from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { resolve } from "node:path";
import { spawn } from "node:child_process";
import { request as proxyRequest } from "node:http";
import { connect as connectSocket } from "node:net";

const publicPort = Number(process.env.PORT || 3000);
const nextPort = publicPort + 1;
const homepagePath = resolve("public/site.html");
const nextCli = resolve("node_modules/next/dist/bin/next");

if (!existsSync(homepagePath)) {
  throw new Error(`Static homepage source not found: ${homepagePath}`);
}

let nextProcess;
let shuttingDown = false;

const server = createServer((request, response) => {
  const pathname = new URL(request.url || "/", "http://localhost").pathname;
  if (pathname === "/") {
    response.writeHead(200, {
      "content-type": "text/html; charset=utf-8",
      "content-length": statSync(homepagePath).size,
    });
    createReadStream(homepagePath).pipe(response);
    return;
  }

  const upstream = proxyRequest(
    {
      hostname: "127.0.0.1",
      port: nextPort,
      path: request.url,
      method: request.method,
      headers: { ...request.headers, host: `127.0.0.1:${nextPort}` },
    },
    (upstreamResponse) => {
      response.writeHead(
        upstreamResponse.statusCode || 502,
        upstreamResponse.statusMessage,
        upstreamResponse.headers,
      );
      upstreamResponse.pipe(response);
    },
  );

  upstream.on("error", () => {
    if (!response.headersSent) response.writeHead(502);
    response.end("Next.js dev server is not ready.");
  });

  request.pipe(upstream);
});

server.on("upgrade", (request, clientSocket, head) => {
  const upstreamSocket = connectSocket(nextPort, "127.0.0.1");
  const handleUpgradeError = (error) => {
    console.error("Hybrid dev server upgrade proxy failed:", error);
    clientSocket.destroy();
    upstreamSocket.destroy();
  };

  upstreamSocket.once("connect", () => {
    const headers = request.rawHeaders
      .reduce((lines, value, index, rawHeaders) => {
        if (index % 2 === 0) lines.push(`${value}: ${rawHeaders[index + 1]}`);
        return lines;
      }, [])
      .join("\r\n");
    upstreamSocket.write(
      `${request.method} ${request.url} HTTP/${request.httpVersion}\r\n${headers}\r\n\r\n`,
    );
    if (head.length) upstreamSocket.write(head);
    clientSocket.pipe(upstreamSocket).pipe(clientSocket);
  });

  upstreamSocket.on("error", handleUpgradeError);
  clientSocket.on("error", () => upstreamSocket.destroy());
});

/**
 * Stop both halves of the hybrid server when startup or runtime fails.
 * @param {Error} error - The failure that should terminate the dev server.
 */
function handleFailure(error) {
  if (shuttingDown) return;
  shuttingDown = true;
  console.error("Hybrid dev server failed:", error);
  if (!process.exitCode) process.exitCode = 1;

  if (server.listening) server.close();
  if (nextProcess && !nextProcess.killed) nextProcess.kill();
}

server.on("error", handleFailure);

try {
  nextProcess = spawn(
    process.execPath,
    [nextCli, "dev", "--webpack", "-p", String(nextPort)],
    {
      stdio: "inherit",
      env: process.env,
    },
  );
  nextProcess.on("error", handleFailure);
} catch (error) {
  handleFailure(error);
}

if (nextProcess) {
  server.listen(publicPort, "127.0.0.1", () => {
    console.log(`Hybrid dev server: http://localhost:${publicPort}`);
    console.log(`Static homepage: / | Next.js routes: internal port ${nextPort}`);
  });
}

/**
 * Shuts down the HTTP server and terminates the Next.js process.
 */
function shutdown() {
  if (shuttingDown) return;
  shuttingDown = true;
  if (server.listening) server.close();
  if (nextProcess && !nextProcess.killed) nextProcess.kill();
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
if (nextProcess) {
  nextProcess.on("exit", (code, signal) => {
    if (code && code !== 0) process.exitCode = code;
    if (!shuttingDown) {
      handleFailure(new Error(`Next.js exited with code ${code} signal ${signal}`));
    } else if (server.listening) {
      server.close();
    }
  });
}
