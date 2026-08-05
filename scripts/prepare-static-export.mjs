import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";

const source = resolve("public/site.html");
const exportDirectory = resolve("out");
const targetIndex = resolve(exportDirectory, "index.html");

if (!existsSync(source)) {
  throw new Error(`Static homepage source not found: ${source}`);
}

if (!existsSync(exportDirectory)) {
  throw new Error(`Next.js export directory not found: ${exportDirectory}`);
}

mkdirSync(exportDirectory, { recursive: true });
copyFileSync(source, targetIndex);

console.log("Rendered public/site.html as out/index.html");
