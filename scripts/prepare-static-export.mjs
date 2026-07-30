import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";

const source = resolve("public/site.html");
const targetIndex = resolve("out/index.html");
const targetSite = resolve("out/site.html");

mkdirSync(dirname(targetIndex), { recursive: true });
mkdirSync(dirname(targetSite), { recursive: true });

copyFileSync(source, targetIndex);
copyFileSync(source, targetSite);

console.log("Static homepage exported to out/index.html and out/site.html");
