---
name: james-gtm
description: Choisit le bon channel d'acquisition (SEO, content, paid, outbound, PLG, community), positionne le produit, fixe le pricing, et planifie le launch (Product Hunt, Show HN, Hunt-style). À utiliser pour préparer un launch, choisir un channel marketing, fixer un pricing, écrire un positioning statement, ou cadrer un go-to-market. Déclencheurs typiques — "go-to-market", "GTM", "channel acquisition", "launch strategy", "Product Hunt", "Show HN", "pricing", "positioning", "messaging", "SEO content", "outbound", "PLG".
version: 1.0.0
---

# Go-To-Market — Channel, Pricing, Launch

Ce skill évite l'erreur #3 des fondateurs : un bon produit lancé sans GTM = aucun user. La meilleure idée meurt si personne n'en entend parler.

**Principe :** un GTM n'est pas une checklist marketing. C'est un **choix stratégique** : **un seul channel principal** au début, exécuté à fond. Tu peux pas faire SEO + paid + outbound + community en même temps avec 2 personnes.

## Étape 1 — Positioning statement

Avant tout channel, **clarifier qui tu es** et **pour qui**.

### Template (April Dunford)

> Pour **{segment cible précis}**
> qui **{problème ou frustration}**,
> **{nom du produit}** est **{catégorie}**
> qui **{bénéfice unique}**.
> Contrairement à **{alternative dominante}**,
> nous **{différence clé}**.

**Exemple :**
> Pour **les développeurs solo qui shippent vite**,
> qui **n'ont pas le temps de monitorer leurs apps en prod**,
> **{Produit}** est **un outil d'observabilité minimaliste**
> qui **se setup en 5 minutes avec un seul agent**.
> Contrairement à **Datadog ou New Relic**,
> nous **n'avons que les 5 graphs qui comptent vraiment**.

**Règles :**
- Segment **précis** ("développeurs solo" pas "développeurs")
- Catégorie **familière** (les gens doivent comprendre dans quel rayon t'es)
- Une **seule** différence clé (pas 5)
- "Contrairement à" doit nommer **un vrai concurrent**, pas un homme de paille

## Étape 2 — Choisir le channel d'acquisition

**Règle : un seul channel principal au démarrage.** Tu mesures, tu doubles, tu cherches le 2ème ensuite.

### Les 6 channels viables early-stage

#### 1. SEO / Content
- **Pour qui** : produit qui résout un problème **recherché activement** (longue tail keywords)
- **Coût** : faible cash, **élevé en temps** (3-6 mois avant signal)
- **Avantage** : trafic compound, gratuit une fois indexé
- **Inconvénient** : long. Tu n'as pas de signal avant 90 jours.
- **Quand t'es là si** : SaaS B2B SMB, dev tools, niches verticales

#### 2. Paid acquisition (Google Ads, Meta, LinkedIn)
- **Pour qui** : produit avec **intent clair** + **ARPU suffisant** (CAC <ARPU annuel)
- **Coût** : cash élevé, signal rapide
- **Avantage** : signal en 7 jours, scalable si unit economics tiennent
- **Inconvénient** : pas de moat, CAC monte avec le temps
- **Quand t'es là si** : consumer subscription, e-commerce, B2B SMB avec ARPU $50+/mo

#### 3. Outbound (cold email / LinkedIn)
- **Pour qui** : B2B avec **ACV ≥$5k/an** et **segment identifiable**
- **Coût** : moyen (outils + SDR ou freelance)
- **Avantage** : tu contrôles le volume, signal en 2-4 semaines
- **Inconvénient** : usure rapide (deliverability), pas viral
- **Quand t'es là si** : B2B mid-market ou enterprise

#### 4. PLG (Product-Led Growth)
- **Pour qui** : produit avec **aha moment <5 min**, **freemium**, **viral loops**
- **Coût** : faible cash, **élevé en produit**
- **Avantage** : CAC near-zero si ça marche
- **Inconvénient** : ne marche que si le produit est vraiment magique ET viral
- **Quand t'es là si** : dev tools, collaboration tools, content tools

#### 5. Community / Content native
- **Pour qui** : produit qui résonne avec une **communauté identifiable** (subreddit, Discord, Slack)
- **Coût** : très bas, demande de la patience et de l'authenticité
- **Avantage** : converti viral + crédibilité
- **Inconvénient** : ne se force pas. Tu dois être de la communauté.
- **Quand t'es là si** : niche tech, indie hacker tools, communautés passionnées

#### 6. Partnerships / Integrations
- **Pour qui** : produit qui s'intègre avec une plateforme dominante (Shopify, Notion, Slack, Salesforce)
- **Coût** : moyen (dev + bizdev)
- **Avantage** : tu pioches dans la base installée du partenaire
- **Inconvénient** : dépendance à la plateforme
- **Quand t'es là si** : add-on, intégration, app sur marketplace

### Matrice de décision

| Critère | SEO | Paid | Outbound | PLG | Community | Partnership |
|---|---|---|---|---|---|---|
| Time to signal | 3-6 mois | 1 semaine | 2-4 sem | 1 mois | 1-3 mois | 3-6 mois |
| Cash requis | Faible | Élevé | Moyen | Faible | Faible | Moyen |
| Effort produit | Bas | Bas | Bas | **Élevé** | Bas | **Élevé** |
| Scalabilité | Très haute | Haute | Limite | Très haute | Limite | Haute |
| Compounding | Oui | Non | Non | Oui | Oui | Oui |
| ACV min viable | $0+ | $50/mo+ | $5k/yr+ | $0+ | $0+ | Variable |

**Règle de choix :**
- ACV < $10/mo et viral potentiel → PLG ou Community
- ACV $10-$100/mo, B2C ou prosumer → SEO ou Paid
- ACV $100-$5k/yr B2B → SEO + Content
- ACV ≥ $5k/yr B2B → Outbound + Partnerships
- Produit complémentaire à une plateforme → Partnership

## Étape 3 — Pricing strategy

### Les 4 approches de pricing

#### A. Cost-plus
Tu calcules le coût et tu ajoutes une marge. **À NE JAMAIS faire en SaaS.** Tu sous-vends.

#### B. Competitor-based
Tu te cales sur les concurrents (-20% pour entrer, +50% pour positionnement premium). C'est une **borne**, pas une stratégie.

#### C. Value-based
Tu pric en fonction de la **valeur créée pour le client**. Capture rate 10-30% de la valeur générée.
- **Exemple** : si ton outil fait gagner $10k/an au client, price entre $1k et $3k/an.
- **Avantage** : marges hautes, défensable.
- **Demande** : être capable de mesurer la valeur (case studies, ROI calculator).

#### D. Penetration pricing
Tu price intentionnellement bas pour acquérir vite. Tu remontes après. Risqué — peut créer un anchor bas qui coince.

### Modèles de tarification

| Modèle | Pour qui | Bénéfice |
|---|---|---|
| **Flat monthly** | Simple, B2C ou SMB | Lisible, prédictible |
| **Per seat** | B2B collaboration | Scale avec l'usage |
| **Usage-based** | API, infra, AI | Aligne prix avec valeur consommée |
| **Tiered** | Tous | Capture le surplus de WTP |
| **Freemium** | PLG | Acquisition large, conversion sur valeur ajoutée |
| **Free trial** | Sales-led | Signal d'intent fort |

### Règles de pricing

- **3 tiers max** (Starter / Pro / Enterprise). Au-delà, choice paralysis.
- **Tier du milieu = anchor** — c'est celui que tu veux vendre. Pricé pour être l'évidence.
- **Pas de prix à 4 chiffres sans démo** — si tu veux $1k+/mo, sales call requis.
- **Annual = -15 à -20%** vs monthly (incite à l'engagement, améliore cash flow)
- **Tester le pricing publiquement, pas en interne** — Stripe a remonté son prix 3x en 2 ans après tests A/B

### Pricing par stade de startup

| Stade | Stratégie |
|---|---|
| MVP / pre-PMF | **Pric trop bas** est une erreur. Le bon pricing aide à attirer les bons users. $19-99/mo SaaS typique. |
| Post-PMF | Augmenter de 30-50% chaque ~12 mois. Les early users gardent leur tarif (grandfathering). |
| Scale | Ajouter un tier enterprise. Annual contracts. NRR > 110%. |

## Étape 4 — Launch tactics

### Le launch n'est pas la sortie du produit

**Erreur courante :** "Je lance sur Product Hunt le jour où je termine le code."

**Bonne approche :** le launch est une **séquence** de 4-6 semaines.

### Séquence launch

#### J-30 : Pre-launch
- Waitlist + landing avec teaser
- Annonces sur tes channels (X, LinkedIn, Discord)
- Outreach 1-1 à 50-100 early supporters
- Préparer assets (screenshots, video démo, copy)

#### J-7 : Warm-up
- Email à la waitlist : "j'ai besoin de vous le {jour J}"
- Pré-shipment à 20-50 power users (early access)
- Recueillir 5-10 testimonials prêts à poster

#### J-Day : Launch coordonné
- **Product Hunt** : hunter identifié, posté à 00:01 PT (utile : un trafic US-est)
- **Show HN** : titre factuel ("Show HN: I built X to solve Y"), commentaire détaillé en premier
- **Twitter/X thread** : storytelling — pourquoi tu l'as fait
- **LinkedIn** : version pro
- **Reddit subreddits ciblés** : pas spammy, valeur d'abord
- **Newsletter / blog** : article de fond pour SEO

#### J+1 à J+7 : Post-launch
- Répondre à chaque commentaire Product Hunt/HN
- Onboarder en 1-1 les early signups
- Mesurer signals : conversion, retention D7, feedback qualitatif

### Anti-patterns au launch

- **Lancer sans warm audience** → tu finis 200ème sur Product Hunt
- **Pitcher la "techno" au lieu de la valeur** → personne ne s'en fout
- **Demander au lieu de donner** → préparer une vraie ressource (article, calculator, ebook) qui a de la valeur même si on n'utilise pas le produit
- **Lancer un vendredi ou un long weekend** → engagement bas
- **Pas de plan post-launch** → tu pers le momentum

## Étape 5 — Mesurer le GTM

Métriques par channel (à reporter dans `james-metrics-framework` pour intégration) :

| Channel | Métriques clés |
|---|---|
| SEO | Pages indexées, position moyenne, signups organiques /mois |
| Paid | CAC par channel, CPC, conversion rate, payback period |
| Outbound | Reply rate, meeting booked rate, closed-won rate, ACV |
| PLG | Signups, activation rate, viral coefficient, time-to-paid |
| Community | Membres engagés, signups attribués, NPS |
| Partnership | Leads attribués, conversion, revenu via partner |

## Format de sortie

```
GTM Plan — {produit}

Positioning Statement
  Pour {segment cible}
  qui {problème},
  {produit} est {catégorie}
  qui {bénéfice}.
  Contrairement à {alternative},
  nous {différence}.

Channel principal choisi : {SEO / Paid / Outbound / PLG / Community / Partnership}
  Raison : {1-2 phrases sur le fit}
  Time to signal attendu : {X semaines}
  Budget cash mensuel estimé : {X€}

Channels secondaires (à explorer plus tard) :
  - {channel}
  - {channel}

Pricing
  Modèle : {flat / per seat / usage / tiered / freemium}
  Tiers :
    Starter : {prix}€/mo — {features}
    Pro : {prix}€/mo — {features} ⭐ anchor
    Enterprise : custom — {features}
  Approche : {cost / competitor / value / penetration}
  Annual discount : {X%}

Launch plan
  J-30 : {actions pre-launch}
  J-7 : {warm-up}
  J-Day : {plateformes + ordre}
  J+7 : {post-launch}

Critère de succès du launch
  {Métrique} ≥ {seuil} dans les {X jours post-launch}

Risques GTM identifiés
  - {risque + mitigation}
```

## Skills liés

- **`james-competitive-landscape`** — le positioning statement utilise "contrairement à {concurrent}". Doit matcher l'analyse de `competitive-landscape`. Le moat identifié là-bas devient le "bénéfice unique" ici.
- **`james-validation`** — si la validation a révélé un canal spontané (ex : "tous mes interviewees viennent de tel subreddit"), c'est probablement le bon channel principal.
- **`james-metrics-framework`** — chaque channel a ses métriques de tracking (voir étape 5 ci-dessus). Les propager dans `metrics-framework`.
- **`james-financial-modeling`** — le coût du channel principal (paid budget, SDR salary, etc.) doit apparaître dans Opex Marketing du modèle financier.
- **`james-mvp-scoping`** — le critère de succès du launch et le critère de succès du MVP doivent être alignés (ou explicitement différents).

## Outils requis

**`WebSearch`** très utile pour :
- Benchmarks de pricing du secteur (concurrents, G2, Capterra)
- Tactics de launch récentes (Product Hunt strategies, Show HN best practices)
- Effectivité actuelle des channels (LinkedIn Ads coût 2026 vs 2023 ≠)

## Règles absolues

1. **Un seul channel principal au démarrage**. Pas 3.
2. **Positioning statement avant de toucher au marketing**. Pas l'inverse.
3. **Pricing value-based >> cost-plus** pour SaaS. Cost-plus est interdit.
4. **3 tiers max**, le milieu est l'anchor.
5. **Launch = séquence 4-6 semaines, pas un événement**.
6. **Critère de succès du launch écrit AVANT**.
7. **Channel choisi doit matcher l'ACV** (voir matrice de décision).
8. **Reporter en français** style James — direct, pas de buzzword growth-hacker.
