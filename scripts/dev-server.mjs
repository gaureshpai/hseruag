import { createServer } from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { resolve } from "node:path";
import { spawn } from "node:child_process";
import { request as proxyRequest } from "node:http";

const publicPort = Number(process.env.PORT || 3000);
const nextPort = publicPort + 1;
const homepagePath = resolve("public/site.html");
const nextCli = resolve("node_modules/next/dist/bin/next");

if (!existsSync(homepagePath)) {
  throw new Error(`Static homepage source not found: ${homepagePath}`);
}

const nextProcess = spawn(process.execPath, [nextCli, "dev", "-p", String(nextPort)], {
  stdio: "inherit",
  env: process.env,
});

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

server.listen(publicPort, "127.0.0.1", () => {
  console.log(`Hybrid dev server: http://localhost:${publicPort}`);
  console.log(`Static homepage: / | Next.js routes: internal port ${nextPort}`);
});

/**
 * Shuts down the HTTP server and terminates the Next.js process.
 */
function shutdown() {
  server.close();
  nextProcess.kill();
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
nextProcess.on("exit", (code) => {
  if (code && code !== 0) process.exitCode = code;
  server.close();
});
