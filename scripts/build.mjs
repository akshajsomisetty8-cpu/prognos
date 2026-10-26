import { access, readFile, readdir, stat } from "node:fs/promises";
import { constants } from "node:fs";
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";
import './build-evidence.mjs';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(projectRoot, "dist");
const checkOnly = process.argv.includes("--check-only");

const requiredFiles = [
  "index.html",
  "style.css",
  "app.js",
  "data.js",
  "directory-index.js",
  "directory.js",
  "directory-details.json",
  "library-provenance.json",
  "manifest.json",
  "sw.js",
  "anatomy.html",
  "anatomy.css",
  "anatomy.js",
  "models/atlas.json"
];

const checkedScripts = ["app.js", "data.js", "directory-index.js", "directory.js", "sw.js", "anatomy.js", "comfort.js", "search.js", "consultant.js"];
const checkedJson = ["directory-details.json", "library-provenance.json", "manifest.json", "models/atlas.json"];

for (const relativePath of requiredFiles) {
  await access(path.join(distDir, relativePath), constants.R_OK);
}

for (const relativePath of checkedScripts) {
  const result = spawnSync(process.execPath, ["--check", path.join(distDir, relativePath)], {
    encoding: "utf8"
  });
  if (result.status !== 0) {
    process.stderr.write(result.stderr || result.stdout);
    throw new Error(`JavaScript syntax check failed for ${relativePath}`);
  }
}

for (const relativePath of checkedJson) {
  JSON.parse(await readFile(path.join(distDir, relativePath), "utf8"));
}

const indexHtml = await readFile(path.join(distDir, "index.html"), "utf8");
for (const script of ["app.js", "directory-index.js", "directory.js"]) {
  if (!indexHtml.includes(`src=\"${script}\"`) && !indexHtml.includes(`src=\"${script}?`)) {
    throw new Error(`index.html does not load ${script}`);
  }
}

const provenance = JSON.parse(await readFile(path.join(distDir, "library-provenance.json"), "utf8"));
if (provenance.entryCount < 20000 || provenance.summaryCount < 2000) {
  throw new Error("The generated medical directory appears incomplete.");
}

const modelFiles = (await readdir(path.join(distDir, "models"))).filter((name) => name.endsWith(".bin.gz"));
if (modelFiles.length !== 15) {
  throw new Error(`Expected 15 anatomy model chunks, found ${modelFiles.length}.`);
}

let totalBytes = 0;
async function measureDirectory(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      await measureDirectory(entryPath);
    } else if (entry.isFile()) {
      totalBytes += (await stat(entryPath)).size;
    }
  }
}
await measureDirectory(distDir);

console.log(`${checkOnly ? "Checks" : "Production build"} passed.`);
console.log(`Output: ${distDir}`);
console.log(`Medical directory: ${provenance.entryCount.toLocaleString()} entries, ${provenance.summaryCount.toLocaleString()} summaries`);
console.log(`Anatomy model: ${modelFiles.length} compressed chunks`);
console.log(`Static output size: ${(totalBytes / 1024 / 1024).toFixed(1)} MB`);
