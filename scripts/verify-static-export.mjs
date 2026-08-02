import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const source = resolve("public/site.html");
const exportDirectory = resolve("out");
const checks = [
  ["public/site.html", source],
  ["out/index.html", resolve(exportDirectory, "index.html")],
  ["out/site.html", resolve(exportDirectory, "site.html")],
  ["out/old/index.html", resolve(exportDirectory, "old", "index.html")],
  [
    "out/projects/index.html",
    resolve(exportDirectory, "projects", "index.html"),
  ],
];

for (const [label, filePath] of checks) {
  if (!existsSync(filePath)) {
    throw new Error(`Missing build artifact: ${label}`);
  }
}

const sourceContents = readFileSync(source, "utf8");
const homepageContents = readFileSync(checks[1][1], "utf8");

if (homepageContents !== sourceContents) {
  throw new Error("out/index.html is not rendered from public/site.html");
}

console.log("Static export smoke test passed: HTML homepage and Next.js routes are present.");
