import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const distDir = join(root, "dist");

mkdirSync(distDir, { recursive: true });
copyFileSync(join(root, "landing/index.html"), join(distDir, "index.html"));
console.log("copied landing/index.html → dist/index.html");
