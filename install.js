#!/usr/bin/env node
/**
 * James Business installer — copies the agent file into the user's (or
 * project's) `.claude/agents/` directory and prints next steps for the
 * companion plugin.
 *
 * Usage:
 *   npx @nmarijane/james-business              # user scope (~/.claude/agents)
 *   npx @nmarijane/james-business --project    # project scope (./.claude/agents)
 *   npx @nmarijane/james-business --help
 */

"use strict";

const fs = require("fs");
const path = require("path");
const os = require("os");

const args = process.argv.slice(2);

if (args.includes("--help") || args.includes("-h")) {
  console.log(`
James Business — a Claude Code agent for startup / business idea analysis.

Usage:
  npx @nmarijane/james-business             Install at user scope (default)
  npx @nmarijane/james-business --project   Install at project scope (./.claude)
  npx @nmarijane/james-business --help      Show this help

After install, add the companion plugin in Claude Code:
  /plugin marketplace add claude-code-workflows
  /plugin install startup-business-analyst@claude-code-workflows
`);
  process.exit(0);
}

// ── Color helpers (ANSI, skipped if output is piped) ─────────────────────
const tty = process.stdout.isTTY;
const green = (s) => (tty ? `\x1b[32m${s}\x1b[0m` : s);
const gray = (s) => (tty ? `\x1b[90m${s}\x1b[0m` : s);
const bold = (s) => (tty ? `\x1b[1m${s}\x1b[0m` : s);
const yellow = (s) => (tty ? `\x1b[33m${s}\x1b[0m` : s);

// ── Resolve target directory ─────────────────────────────────────────────
const projectScope = args.includes("--project");
const targetDir = projectScope
  ? path.resolve(process.cwd(), ".claude", "agents")
  : path.join(os.homedir(), ".claude", "agents");

// ── Copy the agent file ──────────────────────────────────────────────────
try {
  fs.mkdirSync(targetDir, { recursive: true });
} catch (err) {
  console.error(`✗ Cannot create ${targetDir}: ${err.message}`);
  process.exit(1);
}

const sourceAgent = path.join(__dirname, "agents", "james-business.md");
const destAgent = path.join(targetDir, "james-business.md");

if (!fs.existsSync(sourceAgent)) {
  console.error(`✗ Source file missing: ${sourceAgent}`);
  process.exit(1);
}

const destExists = fs.existsSync(destAgent);
fs.copyFileSync(sourceAgent, destAgent);

if (destExists) {
  console.log(
    `${yellow("↻")} James Business updated at ${gray(destAgent)}`,
  );
} else {
  console.log(
    `${green("✓")} James Business installed at ${gray(destAgent)}`,
  );
}
console.log();

// ── Detect companion plugin ──────────────────────────────────────────────
const pluginsConfigPath = path.join(
  os.homedir(),
  ".claude",
  "plugins",
  "installed_plugins.json",
);

let pluginInstalled = false;
try {
  const raw = fs.readFileSync(pluginsConfigPath, "utf8");
  const parsed = JSON.parse(raw);
  pluginInstalled = Object.keys(parsed.plugins || {}).some((k) =>
    k.startsWith("startup-business-analyst@"),
  );
} catch {
  // File absent or unparseable — treat as not installed.
}

if (pluginInstalled) {
  console.log(
    `${green("✓")} Companion plugin ${bold(
      "startup-business-analyst",
    )} detected. You're ready.`,
  );
  console.log();
  console.log(gray("Invoke James from Claude Code:"));
  console.log(
    `  ${bold(
      'Agent({ subagent_type: "James Business", prompt: "Analyse mon idée: ..." })',
    )}`,
  );
} else {
  console.log(gray("─".repeat(60)));
  console.log(bold("Next step — install the companion plugin"));
  console.log(
    gray(
      "  James invokes structured skills (market sizing, competitive analysis,",
    ),
  );
  console.log(
    gray(
      "  financial modeling) from this plugin. Without it he falls back to",
    ),
  );
  console.log(gray("  web-search only (signals it explicitly)."));
  console.log();
  console.log("  In Claude Code, run:");
  console.log();
  console.log(`    ${bold("/plugin marketplace add claude-code-workflows")}`);
  console.log(
    `    ${bold(
      "/plugin install startup-business-analyst@claude-code-workflows",
    )}`,
  );
  console.log();
}
