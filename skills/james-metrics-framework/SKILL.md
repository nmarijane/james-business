---
name: james-metrics-framework
description: Définit les bonnes métriques à tracker par stade de startup (seed → Series A) et par business model (SaaS, marketplace, consumer, B2B). Calcule CAC, LTV, LTV:CAC, burn multiple, Magic Number. Donne les benchmarks du secteur. À utiliser pour construire un dashboard métier, un board reporting, ou évaluer la santé d'une startup. Déclencheurs typiques — "CAC", "LTV", "metrics", "KPIs", "unit economics", "dashboard", "north star", "burn multiple".
version: 1.1.0
---

# Metrics Framework — Par Stade et Par Business Model

Ce skill identifie les 5-8 métriques qui comptent vraiment pour une startup donnée, avec les formules et les benchmarks.

**Principe :** plus tu traces, moins tu décides. Early-stage, 5-8 métriques max. Si c'est pas actionnable, c'est pas une métrique, c'est une vanity number.

## Étape 1 — Identifier la North Star Metric

**Une seule métrique** qui capture la valeur livrée aux clients ET corrèle avec la croissance long-terme.

Exemples selon business model :
- **SaaS B2B** : Paid seats activés / semaine, ARR, Weekly Active Teams
- **Marketplace** : GMV (Gross Merchandise Value), transactions complétées / semaine
- **Consumer subscription** : Monthly Active Subscribers, content consumed / user
- **Social / UGC** : Daily Active Users, posts created / user
- **Dev tools** : Weekly Active Developers, projects connectés
- **Fintech** : Transactions processed, $ through-put

**La North Star ≠ Revenue.** Revenue est un résultat. La North Star est le comportement qui CAUSE le revenu.

## Étape 2 — Les 6 familles de métriques

Quelque soit le business model, 6 catégories comptent :

1. **Acquisition** — combien de nouveaux users/clients ?
2. **Activation** — ont-ils atteint le "aha moment" ?
3. **Retention** — reviennent-ils ?
4. **Revenue** — combien ça nous rapporte ?
5. **Referral** — partagent-ils ?
6. **Unit economics** — est-ce rentable par client ?

C'est le **AARRR funnel** classique. Chaque stade doit avoir 1-2 métriques mesurées.

## Core metrics universelles

### Revenue

**MRR (Monthly Recurring Revenue)**
```
MRR = Σ (Subscriptions actives × Prix mensuel effectif)
```

**ARR (Annual Recurring Revenue)** = MRR × 12

**ARR growth rate (annualisé)** — benchmark sain pre-seed → seed : 2-4× par an. Série A : 2-3× par an. Série B+ : 1.5-2×.

### Acquisition & Activation

**CAC (Customer Acquisition Cost)**
```
CAC = (Coûts sales + marketing sur la période) / Nb nouveaux clients acquis
```

**CAC Payback Period**
```
Payback = CAC / (ARPU mensuel × Gross Margin %)
```
Benchmark SaaS B2B sain : **<12 mois**. >24 mois = unit economics cassées.

**Activation rate** (propre à chaque produit)
```
Activation = Users ayant complété l'event "aha moment" / Total signups
```
Benchmark SaaS sain : **40-60%** d'activation dans les 7 jours.

### Retention

**Gross Revenue Retention (GRR)**
```
GRR = (MRR début période - Churn MRR - Downgrade MRR) / MRR début période
```
Benchmark B2B SMB : 85-90%. B2B Mid-market : 90-95%. Enterprise : 95%+.

**Net Revenue Retention (NRR)**
```
NRR = (MRR début + Expansion - Churn - Downgrade) / MRR début
```
Benchmark B2B SMB : **100-110%**. Mid-market : 110-125%. Enterprise : 120-140%+.

**NRR > 100%** = les clients existants dépensent plus avec toi au fil du temps. C'est le signal #1 pour Series A investors.

### Unit Economics

**LTV (Lifetime Value)**
```
LTV = ARPU × Gross Margin × (1 / Churn rate mensuel)
```

Simplifié : `LTV = ARPU × Gross Margin / Monthly Churn`

**LTV:CAC ratio**
```
LTV:CAC = LTV / CAC
```
Benchmark :
- **<1** : tu perds de l'argent à chaque client → cassé
- **1-3** : marginal, va falloir améliorer
- **3-5** : sain
- **>5** : soit exceptionnel, soit tu sous-investis en acquisition

### Efficacité de la croissance

**Burn Multiple** (popularisé par David Sacks)
```
Burn Multiple = Net Burn / Net New ARR
```
- **<1** : excellent (chaque dollar brûlé génère >1$ d'ARR net nouveau)
- **1-1.5** : great
- **1.5-2** : good
- **2-3** : suspect — creuser pourquoi
- **>3** : bad — brûler du cash sans traction

**Magic Number** (SaaS)
```
Magic Number = (ARR Q - ARR Q-1) × 4 / (S&M spend Q-1)
```
- **>1** : on peut accélérer les dépenses S&M
- **0.75-1** : invest cautiously
- **<0.75** : fix the funnel avant de scaler

### Team efficiency

**Revenue per employee**
Benchmark SaaS :
- Série A : $150k-$250k ARR per employee
- Série B : $250k-$400k
- Série C+ : $400k+
- Top décile public SaaS : $600k+

## Metrics par business model

### SaaS B2B — Top 8 métriques

1. MRR / ARR
2. NRR (Net Revenue Retention)
3. CAC + CAC Payback
4. Gross Margin
5. Activation rate (7-day)
6. Monthly logo churn (% clients qui partent)
7. Pipeline / Sales velocity
8. Burn Multiple

### Marketplace — Top 8 métriques

1. GMV (Gross Merchandise Value)
2. Take rate (revenu / GMV)
3. Net revenue
4. Number of active buyers + sellers (les 2 côtés)
5. Liquidity (% listings vendus dans X jours)
6. Repeat rate (% buyers qui reviennent)
7. CAC par côté
8. Contribution margin par transaction

### Consumer Subscription — Top 8 métriques

1. MAU / DAU
2. Monthly paid subscribers
3. Monthly churn rate
4. ARPU
5. Trial-to-paid conversion
6. D7 / D30 retention cohort
7. CAC par channel (paid vs organic)
8. Payback period

### B2B Sales-led — Top 8 métriques

1. Qualified Pipeline ($)
2. Win rate
3. Sales cycle length
4. ACV (Annual Contract Value) moyen
5. NRR
6. Magic Number
7. Rep productivity ($ ARR / rep / year)
8. Logo churn (grands comptes)

## Metrics par stade

### Pre-seed / Seed (0 → $1M ARR)

**Focus :** trouver le PMF. Tracker les **comportements** plus que les chiffres.
- Weekly Active Users (or Teams/Accounts)
- Activation rate
- D30 retention (au moins 40% pour PMF solide)
- Demand : inbound signups, waitlist conversion
- Usage par user actif

On **n'obsède pas sur CAC/LTV** à ce stade — les cohortes sont trop petites pour être statistiquement fiables.

### Seed → Series A ($1M → $5M ARR)

**Focus :** scalabilité de l'acquisition + rétention qui tient.
- MRR growth month-over-month (≥15% MoM = hot)
- NRR (doit dépasser 100%)
- CAC Payback
- Burn Multiple (<1.5 pour série A)
- Logo churn <1.5%/month
- Magic Number

### Series A → Series B ($5M → $20M ARR)

**Focus :** unit economics + efficacité machine.
- ARR growth YoY (≥2-3× pour rester attractive)
- NRR (120%+ idéal)
- Gross Margin (70%+ pour SaaS)
- CAC Payback <18 mois
- Revenue per employee
- Annual contract length (plus long = meilleur)

## Vanity metrics à ignorer

- Total signups (sans distinction active/inactive)
- Total downloads / visits
- Followers sociaux
- Total registered users cumulés depuis la fondation
- "Valuations" non-réalisées
- Impressions, reach

**Règle :** si une métrique ne peut pas bouger à cause d'une action qu'on contrôle, c'est pas une métrique actionnable.

## Format de sortie

```
Metrics Framework — {produit}

Business model : {SaaS / Marketplace / Consumer / Dev tools / ...}
Stade : {pre-seed / seed / Series A+}

North Star Metric
  Choisie : {métrique}
  Pourquoi : {lien avec la valeur client et le revenu}

Top 6-8 métriques à tracker
  1. {métrique} — formule — benchmark cible — fréquence de review
  2. ...

Unit economics actuelles (estimées)
  CAC : {X€}
  LTV : {X€}
  LTV:CAC : {X}
  CAC Payback : {X mois}
  → Verdict : {healthy / marginal / broken}

Efficacité croissance
  Burn Multiple : {X}
  Magic Number : {X}
  → Verdict : {accelerate / steady / fix-the-funnel}

Metrics à NE PAS tracker
  {liste des vanity metrics spécifiques au produit}

Prochaine métrique à instrumenter
  {si une métrique clé n'est pas encore mesurée, flag-la}
```

## Skills liés

Les métriques identifiées ici sont des **inputs directs** d'autres analyses — pas juste un dashboard isolé :

- **`james-financial-modeling`** — **ARPU, NRR, Gross Margin, CAC Payback, Monthly Churn** définis ici sont les hypothèses clés du modèle financier. Ordre de passage : définir les métriques d'abord, puis propager dans `financial-modeling`. Si on inverse, le modèle pilote les métriques → dashboard fictif.
- **`james-market-sizing`** — la **North Star** doit être proportionnée au SAM. "10k Weekly Active Teams" pour un SAM de 500 entreprises = incohérent. Vérifier l'ordre de grandeur.
- **`james-competitive-landscape`** — si les concurrents scannés à l'étape 1 de `competitive-landscape` affichent des métriques publiques (investor updates, S-1, blog CEO), les utiliser comme **benchmark spécifique** au lieu du générique SaaStr/OpenView.
- **`james-team-composition`** — le diagnostic de la **contrainte actuelle** (étape 1 de `team-composition`) vient des métriques : churn élevé → contrainte rétention, CAC qui monte → contrainte GTM, activation faible → contrainte product. Demander `metrics-framework` en amont si les contraintes ne sont pas évidentes.

## Outils requis

Pas de dépendance externe bloquante. **`WebSearch`** recommandé pour actualiser les benchmarks sectoriels (OpenView, SaaStr, ChartMogul, Bessemer State of the Cloud) — les benchmarks embarqués vieillissent.

## Règles absolues

1. **Une seule North Star Metric** — pas 3.
2. **5-8 métriques opérationnelles max** — au-delà, personne ne les regarde.
3. **Toujours donner les formules** — pas juste le nom.
4. **Toujours donner le benchmark** — une métrique sans benchmark ne dit rien.
5. **Distinguer le stade** — ce qui compte à pre-seed n'est pas ce qui compte à Series B.
6. **Flag les vanity metrics** si l'utilisateur les mentionne.
7. **Reporter en français** style James.
