---
name: james-financial-modeling
description: Construit un modèle financier 3-5 ans pour une startup early-stage — revenue projection par cohorte, coûts, burn, runway, scénarios base/upside/downside, sizing d'une levée. À utiliser pour préparer un pitch investor, calculer le runway, sizer une seed ou une Series A. Déclencheurs typiques — "financial model", "projections", "burn rate", "runway", "combien lever", "3 year plan", "P&L startup".
version: 1.0.0
---

# Financial Modeling — Startup Early-Stage

Ce skill sort un modèle financier défendable pour un pitch seed/Series A, sans exceller-itis.

**Principe :** un modèle startup n'est pas une prédiction — c'est une **hypothèse testable**. Les investisseurs ne croient pas aux chiffres, ils croient à la qualité du raisonnement. Un modèle qui se casse à la moindre hypothèse challengée = red flag.

## Structure du modèle

Un bon modèle a 5 couches :

1. **Revenue** — par cohorte, par ligne de produit, par segment
2. **Cost of Revenue** — infra, API tierce, paiement processors
3. **Opex** — équipe, marketing, G&A, tooling
4. **Cash flow** — burn mensuel, runway
5. **Scenarios** — base / upside / downside

## Couche 1 — Revenue

### Cohort-based projection (SaaS)

**Formule :**
```
MRR (mois M) = Σ (Taille cohorte K × Taux rétention après M-K mois × ARPU)
```

Pour chaque cohorte entrante (mois K), on suit sa rétention mois après mois.

**Hypothèses à défendre :**
- **Taille cohorte mensuelle** : combien de nouveaux clients par mois à chaque mois ? Ramp-up ou plateau ?
- **Rétention** : B2B SaaS sain = 80-95% net retention annuel. B2C = 30-50%. Marketplace = variable.
- **ARPU** : prix moyen effectif (pas le prix affiché). Compter : freemium impact, annual vs monthly mix, churn silencieux, discounts.

### Benchmarks par business model

| Modèle | Métrique clé | Benchmark sain |
|---|---|---|
| B2B SaaS SMB | Net Revenue Retention | 100-110% |
| B2B SaaS mid-market | NRR | 110-125% |
| B2B SaaS enterprise | NRR | 120-140% |
| B2C subscription | Monthly retention | 85-95% |
| Marketplace | Take rate | 5-30% selon vertical |
| Usage-based | Expansion rate | 140%+ si healthy |

### Template revenue 24 mois

```
Mois      1    2    3    ...  12   ...  24
Nouveaux  10   15   25        100       200
Retention 0    10   24        ...       ...
(cumul)
ARPU      50   50   50        60        70  (expansion)
MRR       500  1250 2500      {formule}
ARR       6k   15k  30k       ...       ...
```

## Couche 2 — Cost of Revenue (COGS)

**Pour un SaaS B2B**, typiquement 10-30% du revenu :
- **Infra** (AWS, Vercel, DB) : 5-10% revenu
- **APIs tierces** (Anthropic, OpenAI, Stripe) : 5-15% revenu
- **Support client** (partie allouée aux clients payants) : 5-10%
- **Success / onboarding** (pour tier > $1k/mo) : 5-10%

**Gross Margin =** 100% - COGS%
- SaaS healthy : **70-85%**
- SaaS AI-heavy (Anthropic/OpenAI = COGS direct) : 50-70%
- Marketplace : 30-50% (take rate - payment fees)

## Couche 3 — Opex

### Headcount (le plus gros poste)

Coût **fully-loaded** par tête (inclut salaire + charges + équipement + tooling + bureau) :

| Région | Junior dev | Senior dev | Founder | Head of Sales | Head of Marketing |
|---|---|---|---|---|---|
| Paris | 65k€ | 110k€ | 0-80k€ | 100k€ | 90k€ |
| Remote EU | 60k€ | 100k€ | 0-80k€ | 90k€ | 85k€ |
| SF | $150k | $250k | $0-180k | $220k | $200k |

Ajouter charges employeur France = **×1.45** sur le brut.

### Marketing

- **Organic** (SEO, content) : budget tooling + freelance. 3-10k€/mois early-stage.
- **Paid acquisition** : démarrer avec 5-15% du revenu. Scale à 20-30% si unit economics saines.
- **Outbound** : compter le SDR full-time dans headcount, pas dans marketing.

### G&A

- **Legal / compta** : 5-15k€/an early, puis +fractional CFO à partir de ~$2M ARR
- **Tooling interne** : Notion, Linear, GitHub, Figma, Slack… → 100-300€/user/mois en général
- **Assurance, office** : variable

### Règle du pouce

En pré-seed / seed :
- **70-80% du burn = salaires**
- **10-20% = infra + API**
- **5-15% = marketing + tooling + G&A**

## Couche 4 — Cash flow & Runway

### Formules

```
Burn mensuel = Opex + COGS - Revenu mensuel

Burn net = Burn mensuel (si négatif = on gagne de l'argent, rare en early)

Runway = Cash en banque / Burn mensuel moyen

Default alive = Revenu couvre Opex au taux de croissance actuel avant épuisement du cash
Default dead = L'inverse — il faut lever, cutter, ou pivoter
```

### Milestones typiques

| Stade | Runway à sécuriser | Taille equipe | ARR target |
|---|---|---|---|
| Pre-seed | 12-18 mois | 2-5 | $0-200k |
| Seed | 18-24 mois | 5-15 | $200k-$2M |
| Series A | 24 mois | 15-50 | $2M-$10M |
| Series B | 24 mois | 50+ | $10M+ |

**Règle de survie :** jamais laisser tomber le runway sous **6 mois**. À 9 mois, démarrer la levée. À 6 mois, cut l'opex agressivement.

## Couche 5 — Scénarios

**Base / Upside / Downside** — jamais un seul chiffre.

### Base case
- Hypothèses moyennes défendables
- Croissance qui matche les benchmarks du secteur
- Le "si tout se passe comme prévu"

### Upside (+30 à +50%)
- On atteint le PMF plus vite
- Un deal enterprise rentre en année 2
- Viral loop fonctionne

### Downside (-30 à -50%)
- CAC 2× plus cher que prévu
- Churn 2× plus élevé
- Pas de PMF avant mois 12

**Toujours sortir les 3.** Montrer qu'on a pensé au downside = signal de maturité pour un investisseur.

## Sizing d'une levée

**Formule :**
```
Montant à lever = Burn moyen × Durée cible du runway (18-24 mois) × 1.2 (buffer)
```

**Exemple :**
- Burn prévu : 120k€/mois (équipe 8 personnes, Paris)
- Runway cible : 20 mois
- Levée = 120k × 20 × 1.2 = **2.88M€**

**Règles :**
- Ne pas sous-dimensionner (tu vas re-lever dans 9 mois au pire moment)
- Ne pas sur-dimensionner (dilution inutile, pression de déploiement)
- Aligner le runway sur des **milestones de revenu** (ex : "on lève 2M€ pour arriver à 1M ARR, ce qui débloque une Series A")

## Red flags à éviter

- **Hockey stick plat puis vertical année 3** sans justification → pas crédible
- **Gross margin 95%** pour un SaaS AI-heavy → faux, la facture API est dans les COGS
- **CAC < $10 sur Google Ads compétitif** → fantaisie
- **Churn 0% pour 5 ans** → jamais
- **Salaires moyens $40k à SF** → pas crédible
- **Revenue par sales rep > $1M ARR année 1** → top décile seulement
- **Scénarios identiques à 5% près** → pas de scénarios réels

## Format de sortie

```
Financial Model — {produit}

Hypothèses clés
  Business model : {SaaS B2B / marketplace / usage-based / ...}
  ARPU effectif : {X€/mois}
  Net Revenue Retention : {X%}
  Gross Margin : {X%}
  CAC cible : {X€}
  Équipe pic sur la période : {X personnes}

Revenue (base case)
  Y1 ARR : {X}
  Y2 ARR : {X}
  Y3 ARR : {X}
  Y4 ARR : {X}
  Y5 ARR : {X}

Burn & Runway
  Burn moyen Y1-Y2 : {X€/mois}
  Runway à X€ levés : {X mois}
  Default alive / dead : {état actuel}

Scénarios
  Base : {revenue Y3, burn moyen}
  Upside : {+X% revenue, conditions}
  Downside : {-X% revenue, conditions}

Levée recommandée
  Montant : {X€}
  Use of funds : {% équipe, % marketing, % infra, % buffer}
  Milestone débloqué : {ARR cible + runway post-levée}

Hypothèses sensibles à auditer
  1. {la plus fragile + comment la valider}
  2. {...}
```

## Règles absolues

1. **Cohort-based pour SaaS**, pas de straight-line projection.
2. **Gross margin réaliste** selon le business model. Si AI-heavy, COGS doit refléter les APIs.
3. **3 scénarios obligatoires**, jamais 1.
4. **Sizing de levée avec buffer 20%**.
5. **Toujours lister les hypothèses sensibles** — celles qui, si cassées, cassent le modèle.
6. **Benchmarks cités** quand une hypothèse est inhabituelle.
7. **Reporter en français** style James.
