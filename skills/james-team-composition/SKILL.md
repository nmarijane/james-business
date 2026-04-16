---
name: james-team-composition
description: Dimensionne l'équipe d'une startup early-stage par stade (pre-seed → Series A), avec roles prioritaires, fourchettes de compensation (Paris, remote EU, SF), equity ranges, et budget aligné sur les milestones de revenu. À utiliser pour planifier les hires, sizer un hiring plan post-levée, décider qui recruter après, ou construire un budget équipe. Déclencheurs typiques — "team", "hiring plan", "headcount", "equity", "comp", "salaires", "org chart", "premiers hires".
version: 1.1.0
---

# Team Composition — Startup Early-Stage

Ce skill construit un hiring plan réaliste : qui recruter, quand, à quel prix, avec quel equity, aligné sur les milestones de revenu.

**Principe :** l'équipe, c'est 70-80% du burn. Un mauvais hire coûte **6-12 mois de runway**. On ne recrute pas pour occuper un poste, on recrute pour débloquer une contrainte.

## Étape 1 — Identifier la contrainte actuelle

Avant de parler de hiring, identifier **ce qui bloque**. Les 4 contraintes classiques :

1. **Product/Tech** — on ne peut pas livrer assez vite → besoin d'ingénierie
2. **Go-to-market** — le produit est là mais on ne sait pas vendre → besoin de sales/marketing
3. **Rétention** — les clients partent → besoin de CS ou d'améliorer le produit (PM/design)
4. **Opérations** — on perd du temps sur du manuel → besoin d'ops ou d'infra

**Règle :** un nouveau hire ne résout que la contrainte actuelle. Si on hire un VP Sales alors que le produit n'a pas de PMF, on crame du cash.

## Étape 2 — Dimensionnement par stade

### Pre-seed (0 → $500k ARR)

**Taille équipe typique : 2-5 personnes**

**Core roles :**
- 2-3 co-fondateurs : Product + Engineering + Business (si split 1-1-1) ou combos
- 1 premier ingé (optionnel, si les fondateurs ne sont pas tous techniques)
- **Contractors** pour design, marketing, legal, compta

**Ce qu'on NE fait PAS à ce stade :**
- Hire un Head of anything (pas d'équipe à diriger)
- Hire un sales (les fondateurs font la vente)
- Hire un CS (les fondateurs font l'onboarding)
- Hire un Product Manager (les fondateurs font la product strategy)

**Focus hire :** celui qui débloque le product-market fit. En général **un ingé senior** si les fondateurs sont non-tech.

### Seed ($500k → $2M ARR)

**Taille équipe typique : 5-15 personnes**

**Core roles progressifs (ordre de priorité selon contrainte) :**

**Technique :**
- 2-4 Full-stack engineers (selon complexité produit)
- 1 Infra / DevOps si on scale sur infra custom

**GTM :**
- 1 Growth marketer (SEO, content, paid) OU 1 AE (Account Executive) si sales-led
- 1 CS / onboarding si ACV > $5k

**Product :**
- 1 Senior PM si les fondateurs sont saturés
- 1 Product designer si UX devient un différenciateur

**Priorité d'ordre** (exemples selon contrainte) :
- Si **PMF mais pas de distribution** → Growth marketer / AE
- Si **bon funnel mais churn haut** → Senior PM + CS
- Si **product backlog énorme** → Engineers avant tout

### Series A ($2M → $10M ARR)

**Taille équipe typique : 15-50 personnes**

**Structure qui émerge :**
- Engineering : 8-20 (Tech Lead / Engineering Manager)
- GTM : 4-15 (VP Sales + AEs + SDRs + CSMs, OU VP Growth + marketers + designers paid)
- Product : 2-5 (Head of Product + PMs + Designers)
- Ops : 1-3 (People Ops, Finance, Legal part-time)

**Premiers "Heads of" à hire :**
- **Head of Engineering** si tech team > 8
- **VP Sales** ou **VP Growth** selon motion (pas les 2 en même temps)
- **Head of Product** si > 3 PMs / designers

**Piège classique :** hire un VP trop tôt. Un VP a besoin de 3-5 ICs pour justifier son poste. Si on le hire avant, il passera son temps à faire le job d'IC, mais au prix d'un VP.

## Compensation ranges (fully-loaded, 2026)

### Paris (brut + charges = coût entreprise)

| Role | Junior | Mid | Senior | Staff / Lead |
|---|---|---|---|---|
| Full-stack dev | 55-70k€ | 75-95k€ | 100-130k€ | 130-160k€ |
| Backend / Infra | 60-75k€ | 80-100k€ | 105-140k€ | 140-170k€ |
| Frontend / UI eng | 55-70k€ | 75-95k€ | 100-125k€ | 125-150k€ |
| Product Designer | 50-65k€ | 70-90k€ | 90-115k€ | 120-150k€ |
| Product Manager | 55-70k€ | 75-100k€ | 100-140k€ | 140-180k€ |
| Growth Marketer | 45-65k€ | 65-85k€ | 85-115k€ | 120-150k€ |
| Account Executive | 45-60k€ + var | 65-80k€ + var | 85-110k€ + var | 120-150k€ + var |
| CSM | 45-60k€ | 60-80k€ | 85-105k€ | — |

**Multiplier coût entreprise France = salaire brut × 1.42** environ (charges employeur).
**Add-ons :** mutuelle, ticket resto, RTT, équipement → +3-5k€/an.

### Remote EU

En général **-10 à -20%** par rapport à Paris (mais dépend du pays — les CDI allemands ou UK se payent au niveau Paris ou plus).

### SF / NYC

**×2 à ×2.5** vs Paris pour les mêmes roles. Un senior full-stack à SF = $200-280k base + equity.

### Remote US

**-15 à -25%** vs SF. Mais le marché US reste plus cher que l'EU, même en remote (entre Paris et SF).

## Equity ranges (options / RSU)

### Founder equity
- 2 co-founders : souvent **50/50** au départ, ajustable avec cliff/vesting
- 3 co-founders : **40/35/25** ou **45/30/25** selon contribution/risque
- Vesting standard : **4 ans, cliff 1 an**

### Employee equity (post-seed, post-dilution)

| Role / Stade | Pre-seed | Seed | Series A |
|---|---|---|---|
| 1er ingé (employé 1-3) | 2-5% | 1-2% | 0.25-1% |
| Senior ingé (employé 5-15) | — | 0.5-1% | 0.15-0.5% |
| Mid ingé (employé 15+) | — | 0.2-0.5% | 0.05-0.25% |
| VP / Head of | — | 1-3% | 0.5-1.5% |
| Executive / CXO | — | 2-5% | 1-2% |
| Advisor (part-time) | 0.25-1% | 0.1-0.5% | 0.05-0.25% |

**Règles :**
- Vesting 4 ans, cliff 1 an (standard)
- Early hires doivent avoir **plus** d'equity (risque plus élevé)
- Option pool typique : **10-15% post-seed**, **15-20% post-Series A**

## Budget hiring aligné sur milestones

**Règle de base :** ne jamais hirer si le revenu généré par le hire ne couvre pas son fully-loaded cost dans les **12-18 mois**.

### Formule rapide

```
Revenue per employee cible (SaaS) :
  Seed : $150k-$200k ARR / employee
  Series A : $200k-$300k ARR / employee
  Series B+ : $300k-$500k ARR / employee

Max headcount = ARR actuel / Revenue per employee cible
```

**Exemple :** à $1.5M ARR seed, `1.5M / 200k = 7.5 employees` — donc ~7-8 max dans l'équipe, pas 15.

### Séquence de hires post-levée seed ($1.5M levés)

Budget burn moyen sur 18-24 mois :
- **Mois 1-6 :** 2 fondateurs + 1-2 ingés = ~30-50k€/mois burn
- **Mois 6-12 :** +1 senior ingé + 1 growth OU AE = ~60-80k€/mois
- **Mois 12-18 :** +1 ingé + 1 CS si enterprise = ~90-110k€/mois
- **Mois 18-24 :** focus PMF + préparer Series A

Ce rythme donne ~5-8 personnes à $2M ARR — cohérent avec les benchmarks.

## Red flags hiring

- **Hirer un C-level avant Series A** → souvent over-hire, exception : CTO co-founder
- **VP Sales pour un produit sans PMF** → il va cramer du cash
- **10 ingés mais 0 PM** → roadmap chaotique
- **PM/designer sans ingé en face** → backlog qui explose
- **Senior exec pour une petite équipe** → il s'ennuie et part
- **Hire offshore pour réduire le coût** → perte de vélocité, communication cassée. À ne faire que pour le support ou des tâches très standardisées.

## Format de sortie

```
Team Composition — {startup}

Stade actuel : {pre-seed / seed / Series A+}
ARR actuel : {X}
Cash disponible : {X€}
Runway actuel : {X mois}

Contrainte identifiée
  {Product / GTM / Retention / Ops}
  Raison : {1-2 phrases}

Hiring plan 12-18 mois
  Priorité 1 : {role} — {timing : M3/M6/M9} — {comp {range}} — {equity}
  Priorité 2 : {...}
  Priorité 3 : {...}
  (max 4-5 hires à ce stade)

Équipe cible à X mois
  Total : {X personnes}
  Breakdown : Eng {N} / GTM {N} / Product {N} / Ops {N}
  Fully-loaded burn équipe : {X€/mois}
  Revenue per employee cible : {X€}

Hires à NE PAS faire maintenant
  {liste avec raison — ex : VP Sales, Head of Growth avant PMF}

Equity pool à allouer
  % à grant sur les 12 prochains mois : {X%}
  Sources : {dilution pool existant ou top-up à la prochaine levée}
```

## Skills liés

Un hiring plan isolé du financier ou de la stratégie = crame du cash pour rien. S'ancrer sur :

- **`james-financial-modeling`** — le **burn équipe** calculé ici doit matcher **exactement** le line item "Opex headcount" du modèle financier (même headcount mois par mois, même fully-loaded cost par région). Si les deux divergent, l'un des deux doit se recaler — en général, c'est le modèle financier qui a sous-estimé les salaires ou le hiring plan qui a oublié des charges.
- **`james-metrics-framework`** — la **contrainte actuelle** (étape 1) se diagnostique via les métriques. Churn élevé → contrainte rétention, CAC qui monte → contrainte GTM, activation faible → contrainte product, velocity eng faible → contrainte tech. Demander `metrics-framework` en amont si les contraintes ne sont pas évidentes.
- **`james-competitive-landscape`** — le **moat à construire** (étape 5 de `competitive-landscape`) dicte l'ordre des hires. Moat "data" → eng + data scientists. Moat "distribution" → growth + sales. Moat "switching cost" → CS + product. Moat "brand" → marketing + design. Ne jamais hire sans savoir quel moat on construit.
- **`james-market-sizing`** — la **taille du SAM** borne l'équipe cible. Un SAM de 50M€ ne supporte pas une équipe de 30 personnes à Series A — le revenue per employee ne peut pas suivre.

## Outils requis

Pas de dépendance externe bloquante. **`WebSearch`** utile pour vérifier les comp ranges locales 2026 (Glassdoor, LinkedIn Salary, Apec, Levels.fyi) — les tables embarquées doivent être actualisées périodiquement.

## Règles absolues

1. **Contrainte d'abord**, role ensuite. Pas de hire sans contrainte claire identifiée.
2. **Ne jamais hire un C-level avant qu'il ait 3-5 ICs à diriger**.
3. **Revenue per employee cible à respecter** — au-delà, on over-hire.
4. **Vesting 4 ans, cliff 1 an** systématique.
5. **Comp + equity doit être cohérent avec le stade** — ni trop généreux early, ni radin late.
6. **Flag les hires qui ne résolvent pas la contrainte actuelle**.
7. **Reporter en français** style James.
