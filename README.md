# James Business

Un agent Claude Code — co-fondateur / analyste business en français décontracté — qui analyse le potentiel d'une idée de startup avec des frameworks structurés (TAM/SAM/SOM, Porter's Five Forces, cohort-based financial modeling, unit economics, team composition).

**Auto-suffisant :** le package installe l'agent + ses 5 skills compagnons. Pas de plugin externe à configurer.

## Ce que fait James

- **Mode rapide** : tu lui soumets une idée, il te renvoie en une page un verdict GO / PIVOT / NO-GO avec problème, marché, concurrents, viabilité.
- **Mode deep-dive** : tu lui demandes "creuse" ou tu parles d'une levée → il enchaîne systématiquement TAM/SAM/SOM triangulé, Porter's Five Forces, Blue Ocean, financial model 3-5 ans, scénarios base/upside/downside, hiring plan aligné sur milestones.
- **Mode conversationnel** : sparring partner — il challenge, pose des contre-exemples, propose des pivots.

Le tout en français, décontracté, sans "Excellente question !" ni buzzwords corporate.

## Install

### Portée utilisateur (dispo dans tous tes projets)

```bash
npx @nmarijane/james-business
```

### Portée projet (ce repo uniquement)

```bash
npx @nmarijane/james-business --project
```

### Ce qui est installé

```
.claude/
├── agents/
│   └── james-business.md
└── skills/
    ├── james-market-sizing/SKILL.md
    ├── james-competitive-landscape/SKILL.md
    ├── james-financial-modeling/SKILL.md
    ├── james-metrics-framework/SKILL.md
    └── james-team-composition/SKILL.md
```

Au scope utilisateur, tout va dans `~/.claude/`. Au scope projet, dans `./.claude/` du cwd.

**Pas de commande `/plugin` à lancer après.** C'est fini.

## Utilisation

Dans Claude Code :

```
Agent({ subagent_type: "James Business", prompt: "Analyse mon idée : ..." })
```

Ou, selon ton interface, `@James Business ...`.

### Exemple — mode rapide

> Analyse mon idée : une app qui booke des créneaux de padel entre amis avec split payment automatique.

James web-search le marché, scan les concurrents (Doodle, Matchi, MeetUp…), juge le moat, et te sort un verdict d'une page avec un pivot si l'idée directe est faible.

### Exemple — mode deep-dive

> Creuse pour une levée de 500K€.

Il enchaîne :
- Invoque `james-market-sizing` → TAM/SAM/SOM triangulé top-down + bottom-up
- Invoque `james-competitive-landscape` → Porter's Five Forces + positioning map + moat
- Invoque `james-financial-modeling` → cohort-based projection 3-5 ans + runway + sizing de levée
- Invoque `james-team-composition` → hiring plan aligné sur les milestones
- Tranche avec un verdict opinionné

Tout synthétisé dans son style à lui — pas de copier-coller brut de skills.

## Les 5 skills compagnons

Chaque skill est un framework structuré en français, calibré sur la procédure de James :

| Skill | Ce qu'il fait |
|---|---|
| `james-market-sizing` | TAM/SAM/SOM via top-down, bottom-up, value theory, avec triangulation et benchmarks |
| `james-competitive-landscape` | Porter's Five Forces, Blue Ocean Strategy, positioning maps, scan GitHub/PH/HN/Reddit |
| `james-financial-modeling` | Revenue cohort-based, COGS, opex, burn, runway, 3 scénarios, sizing de levée |
| `james-metrics-framework` | North Star Metric, AARRR, CAC/LTV/NRR/Burn Multiple par stade et par business model |
| `james-team-composition` | Hiring plan par stade, comp ranges (Paris/remote EU/SF), equity, budget vs milestones |

Les skills sont invocables **indépendamment** de l'agent — si tu veux juste un TAM/SAM sans le persona, tu peux lancer directement `Skill({ skill: "james-market-sizing", ... })`.

## Philosophie

- **Pas de complaisance** : si une idée est nulle, James le dit — mais propose toujours un pivot.
- **Rigueur chiffrée** : en deep-dive, les skills produisent des fourchettes défendables avec sources.
- **Pas de buzzwords** : pas de "leveraging synergies" ni de "disrupting the market".
- **Triangulation** : jamais un chiffre unique, toujours au moins 2 méthodes pour cross-checker.

## Structure du repo

```
.
├── agents/
│   └── james-business.md     # persona + procédures + wiring aux skills
├── skills/
│   ├── james-market-sizing/
│   ├── james-competitive-landscape/
│   ├── james-financial-modeling/
│   ├── james-metrics-framework/
│   └── james-team-composition/
├── install.js                # bin : copie agent + skills vers .claude/
├── package.json
└── README.md
```

## Dév local

```bash
git clone https://github.com/nmarijane/james-business.git
cd james-business

# Test install en sandbox
HOME=/tmp/james-test node install.js

# Pour modifier une skill : édite skills/<name>/SKILL.md
# Pour modifier la persona : édite agents/james-business.md
# Puis bump + publish
npm version minor
npm publish
```

## License

MIT
