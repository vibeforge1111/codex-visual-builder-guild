#!/usr/bin/env node

const fs = require("fs");
const os = require("os");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..");
const source = path.join(repoRoot, "codex", "codex-visual-builder-guild");

function codexHome() {
  if (process.env.CODEX_HOME) return process.env.CODEX_HOME;
  return path.join(os.homedir(), ".codex");
}

function copyDir(src, dest) {
  if (!fs.existsSync(src)) {
    throw new Error(`Missing source skill folder: ${src}`);
  }
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const from = path.join(src, entry.name);
    const to = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(from, to);
    } else if (entry.isFile()) {
      fs.copyFileSync(from, to);
    }
  }
}

const targetRoot = path.join(codexHome(), "skills");
const target = path.join(targetRoot, "codex-visual-builder-guild");

copyDir(source, target);

console.log("Installed Codex skill:");
console.log(`  ${target}`);
console.log("");
console.log("Restart Codex Desktop or start a new Codex session, then invoke it with:");
console.log("  Use codex-visual-builder-guild to run the visual builder loop on this app.");
