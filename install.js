#!/usr/bin/env node
/**
 * James Business installer — copies the agent file and its 5 companion
 * skills into the user's (or project's) `.claude/` directory.
 *
 * Self-contained: no external plugin dependency. Run once, done.
 *
 * Usage:
 *   npx @nmarijane/james-business              # user scope (~/.claude/)
 *   npx @nmarijane/james-business --project    # project scope (./.claude/)
 *   npx @nmarijane/james-business --help
 */

"use strict";

const fs = require("fs");
const path = require("path");
const os = require("os");

const args = process.argv.slice(2);

if (args.includes("--help") || args.includes("-h")) {
  console.log(`
James Business — Claude Code agent + 5 companion skills for startup / business idea analysis.

Usage:
  npx @nmarijane/james-business             Install at user scope (~/.claude/)
  npx @nmarijane/james-business --project   Install at project scope (./.claude/)
  npx @nmarijane/james-business --help      Show this help

What gets installed:
  .claude/agents/james-business.md
  .claude/skills/james-market-sizing/SKILL.md
  .claude/skills/james-competitive-landscape/SKILL.md
  .claude/skills/james-financial-modeling/SKILL.md
  .claude/skills/james-metrics-framework/SKILL.md
  .claude/skills/james-team-composition/SKILL.md
`);
  process.exit(0);
}

// ── Color helpers ────────────────────────────────────────────────────────
const tty = process.stdout.isTTY;
const green = (s) => (tty ? `\x1b[32m${s}\x1b[0m` : s);
const gray = (s) => (tty ? `\x1b[90m${s}\x1b[0m` : s);
const bold = (s) => (tty ? `\x1b[1m${s}\x1b[0m` : s);
const yellow = (s) => (tty ? `\x1b[33m${s}\x1b[0m` : s);

// ── Resolve target directory ─────────────────────────────────────────────
const projectScope = args.includes("--project");
const claudeRoot = projectScope
  ? path.resolve(process.cwd(), ".claude")
  : path.join(os.homedir(), ".claude");

const agentsDir = path.join(claudeRoot, "agents");
const skillsDir = path.join(claudeRoot, "skills");

try {
  fs.mkdirSync(agentsDir, { recursive: true });
  fs.mkdirSync(skillsDir, { recursive: true });
} catch (err) {
  console.error(`✗ Cannot create directories under ${claudeRoot}: ${err.message}`);
  process.exit(1);
}

// ── Copy the agent ───────────────────────────────────────────────────────
const sourceAgent = path.join(__dirname, "agents", "james-business.md");
const destAgent = path.join(agentsDir, "james-business.md");

if (!fs.existsSync(sourceAgent)) {
  console.error(`✗ Source agent missing: ${sourceAgent}`);
  process.exit(1);
}

const agentExisted = fs.existsSync(destAgent);
fs.copyFileSync(sourceAgent, destAgent);

console.log(
  (agentExisted ? yellow("↻") : green("✓")) +
    ` agent    ${gray(destAgent.replace(os.homedir(), "~"))}`,
);

// ── Copy the skills ──────────────────────────────────────────────────────
const sourceSkillsDir = path.join(__dirname, "skills");
if (!fs.existsSync(sourceSkillsDir)) {
  console.error(`✗ Source skills directory missing: ${sourceSkillsDir}`);
  process.exit(1);
}

const skillNames = fs
  .readdirSync(sourceSkillsDir)
  .filter((name) => {
    const skillPath = path.join(sourceSkillsDir, name);
    return (
      fs.statSync(skillPath).isDirectory() &&
      fs.existsSync(path.join(skillPath, "SKILL.md"))
    );
  })
  .sort();

for (const skillName of skillNames) {
  const srcSkillDir = path.join(sourceSkillsDir, skillName);
  const destSkillDir = path.join(skillsDir, skillName);

  fs.mkdirSync(destSkillDir, { recursive: true });

  for (const file of fs.readdirSync(srcSkillDir)) {
    const srcFile = path.join(srcSkillDir, file);
    const destFile = path.join(destSkillDir, file);
    if (fs.statSync(srcFile).isFile()) {
      const existed = fs.existsSync(destFile);
      fs.copyFileSync(srcFile, destFile);
      const icon = existed ? yellow("↻") : green("✓");
      console.log(
        `${icon} skill    ${gray(
          path
            .join(destSkillDir, file)
            .replace(os.homedir(), "~"),
        )}`,
      );
    }
  }
}

console.log();
console.log(gray("─".repeat(60)));
console.log(
  `${bold("James Business")} + ${bold(
    String(skillNames.length),
  )} companion skills installed.`,
);
console.log();
console.log(gray("Scope: ") + (projectScope ? "project" : "user (global)"));
console.log();
console.log(gray("Invoke from Claude Code:"));
console.log(
  `  ${bold(
    'Agent({ subagent_type: "James Business", prompt: "Analyse mon idée : ..." })',
  )}`,
);
console.log();
console.log(
  gray("Or just: ") + bold("@James Business analyse mon idée : ..."),
);
console.log();
