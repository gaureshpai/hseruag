import { copyFileSync } from "node:fs";
import { resolve } from "node:path";

const source = resolve("public/site.html");
const targetIndex = resolve("out/index.html");

copyFileSync(source, targetIndex);

console.log("Copied public/site.html → out/index.html");
