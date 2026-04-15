# James Business

A French-speaking co-founder / business analyst agent for [Claude Code](https://claude.com/claude-code). Analyzes startup ideas with structured frameworks (TAM/SAM/SOM, Porter's Five Forces, financial modeling, team composition) by invoking skills from the `startup-business-analyst` companion plugin.

- **Verdict direct** : GO / PIVOT / NO-GO, sans complaisance.
- **Deux modes** : rapide (web search + opinion) ou deep-dive (frameworks structurés).
- **Français décontracté** : pas de jargon consultant, pas de buzzwords, pas de "Excellente question !".

## Install

### User scope (available in every project)

```bash
npx @nmarijane/james-business
```

### Project scope (this repo only)

```bash
npx @nmarijane/james-business --project
```

Installs the agent file into:
- user scope → `~/.claude/agents/james-business.md`
- project scope → `./.claude/agents/james-business.md`

### Companion plugin (required for deep-dive rigor)

In Claude Code:

```
/plugin marketplace add claude-code-workflows
/plugin install startup-business-analyst@claude-code-workflows
```

This provides the 5 skills James calls:

| Skill | What it does |
|---|---|
| `market-sizing-analysis` | TAM/SAM/SOM via top-down, bottom-up, value theory |
| `competitive-landscape` | Porter's Five Forces, Blue Ocean, positioning maps |
| `startup-financial-modeling` | 3–5 year revenue/cost/cash-flow models with scenarios |
| `startup-metrics-framework` | CAC / LTV / burn multiple / SaaS metrics benchmarks |
| `team-composition-analysis` | Headcount, comp and equity by startup stage |

Without the plugin, James still works in *mode dégradé* (web search only) and signals it explicitly in his answer.

## Usage

In Claude Code:

```
Agent({ subagent_type: "James Business", prompt: "Analyse mon idée : ..." })
```

Or, depending on your interface, `@James Business ...`.

### Mode rapide (default)

Submit an idea in plain French:

> Analyse mon idée : une app qui booke des créneaux de padel entre amis avec split payment automatique.

James will web-search the market, scan competitors, judge the moat and deliver a 1-page verdict with a pivot if the direct idea is weak.

### Mode deep-dive

Trigger with explicit keywords (*creuse*, *analyse complète*, *deep-dive*, *détaille*) or when James proposes it:

> Creuse pour une levée de 500K.

He will invoke the plugin skills systematically and output TAM/SAM/SOM, Porter's Five Forces, financial model, team plan, risks and next steps — all synthesized in his own French voice.

## What's in the box

```
.
├── agents/
│   └── james-business.md   # persona + procedures + skill wiring
├── install.js              # the bin script (copy + detect plugin + instructions)
├── package.json
└── README.md
```

## License

MIT
