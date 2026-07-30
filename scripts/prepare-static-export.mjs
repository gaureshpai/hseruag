import { copyFileSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";

const source = resolve("public/site.html");
const targetIndex = resolve("out/index/index.html");
const targetSite = resolve("out/site.html");

mkdirSync(resolve("out/index"), { recursive: true });

copyFileSync(source, targetIndex);

console.log("Static homepage exported to out/index/index.html");
