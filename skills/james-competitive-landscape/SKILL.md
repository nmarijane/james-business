---
name: james-competitive-landscape
description: Analyse concurrentielle rigoureuse avec Porter's Five Forces, Blue Ocean Strategy, positioning maps et scan stratégique (GitHub, Product Hunt, HN, Reddit). À utiliser pour évaluer les concurrents, identifier le positionnement, défendre un moat, ou préparer un pitch investor. Déclencheurs typiques — "concurrence", "competitive landscape", "positionnement", "Porter", "Blue Ocean", "moat", "qui fait déjà ça".
version: 1.0.0
---

# Competitive Landscape

Ce skill produit une analyse concurrentielle structurée qui va au-delà du simple "qui fait quoi".

**Principe :** une liste de concurrents sans framework = inutile. On veut savoir où jouer (positionnement), pourquoi gagner (moat), et où ne PAS jouer (no-go zones).

## Étape 1 — Scan stratégique

Avant de sortir les frameworks, ratisser large. Toujours via web search :

| Source | Ce qu'on y cherche |
|---|---|
| **Google** | "{vertical} alternatives", "best {category} 2025" |
| **Product Hunt** | Lancements récents, traction (upvotes) |
| **Hacker News** | Discussions (Ask HN, Show HN), sentiment utilisateur |
| **Reddit** | r/SaaS, r/startups, subreddits verticaux — les plaintes client |
| **GitHub** | Forks, stars, issues, alternatives open source |
| **G2 / Capterra** | Reviews, pricing, segments clients |
| **Crunchbase** | Funding rounds, M&A, valorisations |
| **LinkedIn** | Taille équipe, séniorité, géo des concurrents |

**Livrable de cette étape :** une liste de **5-10 concurrents** avec :
- Nom + URL
- Positionnement en une phrase
- Pricing entry + pricing enterprise
- Funding/revenu (si public)
- Cible client principale
- Point fort distinctif
- Point faible visible (reviews, plaintes, churn)

## Étape 2 — Porter's Five Forces

Évalue l'attractivité du marché via 5 forces. Pour chaque force, juger `FAIBLE / MOYEN / ÉLEVÉ` et justifier.

### Force 1 — Menace des nouveaux entrants

**Barrières à l'entrée à évaluer :**
- Capital requis (faible si SaaS solo-fondateur, élevé si hardware)
- Économies d'échelle (plus t'es gros, moins coûteux — ex: infra, AI API credits)
- Coûts de switching pour le client (faible si on remplace un Excel, élevé si intégration profonde)
- Régulation (RGPD, licences — barrière structurelle)
- Effet de réseau (une marketplace vide vaut rien)
- Brand (Apple vs un n-ième player)

**Output :** `Menace ÉLEVÉE / MOYENNE / FAIBLE — {justification}`

### Force 2 — Pouvoir de négociation des fournisseurs

- On dépend de qui ? (AWS, Anthropic API, Stripe, données tierces)
- Peut-on changer facilement ?
- Nos fournisseurs peuvent-ils nous serrer (prix, conditions) ?

### Force 3 — Pouvoir de négociation des clients

- Clients concentrés (10 grands comptes font 80% du revenu) ou atomisés ?
- Coût de switching pour eux ?
- Alternatives gratuites dispo ?
- Sensibilité prix du segment ?

### Force 4 — Menace des substituts

- Qu'est-ce qui résout le même problème **autrement** ? (pas un concurrent direct, mais une solution différente)
- Ex : au lieu d'utiliser un SaaS d'audit SEO, l'entreprise peut embaucher un consultant, utiliser Excel, ou juste ignorer le problème.

### Force 5 — Intensité concurrentielle

- Nombre de concurrents directs
- Vitesse de croissance du marché (marché qui explose = moins de guerre, marché saturé = guerre des prix)
- Différenciation (commodité = guerre des prix, différencié = marges maintenues)
- Barrières à la sortie (switching cost élevé pour les incumbents = ils se battent à mort)

### Synthèse Porter

```
Attractivité globale du marché : ATTRACTIF / MOYEN / DIFFICILE

Raison principale : {la force la plus dominante}
Zones de risque : {forces les plus problématiques}
```

## Étape 3 — Blue Ocean Strategy

Framework "Eliminate / Reduce / Raise / Create" pour trouver de l'espace non-contesté.

Pour chaque axe de compétition classique du secteur, décider :

| Action | Question |
|---|---|
| **ÉLIMINER** | Quels facteurs que l'industrie tient pour acquis devrais-je **supprimer** ? |
| **RÉDUIRE** | Quels facteurs devrais-je livrer **en-dessous** du standard du secteur ? |
| **AUGMENTER** | Quels facteurs devrais-je livrer **au-dessus** du standard ? |
| **CRÉER** | Quels facteurs l'industrie n'a **jamais offerts** et que je pourrais introduire ? |

**Exemple LightSpot** :
- ÉLIMINER : le pricing enterprise à $200+/mo pour un outil d'audit basique
- RÉDUIRE : le dashboard surchargé avec 100 métriques (on en montre 5)
- AUGMENTER : la profondeur GEO (Princeton/ACM 2024 research)
- CRÉER : l'autofix par PR directement sur GitHub (aucun concurrent ne fait ça)

Le moat crédible = ce qu'il y a dans **CRÉER** et **AUGMENTER** au max.

## Étape 4 — Positioning Map

Carte 2D avec deux axes qui comptent vraiment dans le secteur. Placer les concurrents + toi dessus.

**Bons axes à envisager :**
- Prix (bas ↔ élevé)
- Profondeur technique (surface ↔ profonde)
- Self-serve ↔ Sales-led
- Niche ↔ Généraliste
- Consumer ↔ Enterprise
- Automatisé ↔ Consultant-based

**Mauvais axes (trop subjectifs ou binaires) :**
- "Qualité" (tout le monde dit qu'il est le meilleur)
- "Innovation" (même chose)
- "Customer success"

**Règle :** choisir des axes **mesurables** et **actionnables**.

Le positioning gagnant = **une zone de la carte où tu es seul**. Si la zone est vide parce que personne n'en veut, c'est un piège. Si elle est vide parce que personne n'a su l'attaquer, c'est une opportunité.

## Étape 5 — Identification du moat

Moat = avantage durable qui protège la position compétitive. Les vrais moats :

| Type | Définition | Exemple |
|---|---|---|
| **Network effect** | Chaque user ajouté augmente la valeur pour les autres | WhatsApp, Uber |
| **Data / ML** | Tu accumules de la data propriétaire qui améliore le produit | Netflix reco, Google search |
| **Switching cost** | Quitter ton produit coûte cher au client | Salesforce, SAP |
| **Brand / trust** | Le client choisit par confiance, pas par specs | Apple, Stripe |
| **Cost advantage** | Tu produis moins cher que la concurrence | Amazon, Walmart |
| **Regulatory** | Licence exclusive, accréditation | Stripe payment processor, Nvidia CUDA |
| **Scale** | Économies d'échelle structurelles | AWS, S3 pricing |

**Faux moats (à ne JAMAIS accepter comme tel)** :
- "Notre techno est meilleure" (copiable en 6 mois)
- "On a le premier mover advantage" (valable seulement si combiné à un vrai moat)
- "Notre UX est plus belle" (copiable)
- "Notre équipe est meilleure" (peut partir)
- "Le problème est complexe" (ne protège pas si bien capitalisé)

Pour LightSpot par exemple : "l'autofix par PR GitHub" crée du **switching cost** (quitter = reperdre l'intégration et les fixes qui arrivent en flux continu) + du **data advantage** (on apprend des fixes qui ont ou n'ont pas marché sur milliers de repos).

## Étape 6 — Synthèse

```
Competitive Landscape — {produit/marché}

Concurrents identifiés
  1. {Nom} — {positionnement} — {pricing} — {funding}
  2. ...

Porter's Five Forces
  Nouveaux entrants : {FAIBLE/MOYEN/ÉLEVÉ} — {raison}
  Fournisseurs : {...}
  Clients : {...}
  Substituts : {...}
  Intensité : {...}
  → Attractivité : {ATTRACTIF/MOYEN/DIFFICILE}

Blue Ocean — notre positionnement
  Éliminer : {...}
  Réduire : {...}
  Augmenter : {...}
  Créer : {...}

Positioning Map
  Axes retenus : {axe X} vs {axe Y}
  Zone occupée par nous : {...}
  Zone vide exploitable : {...}

Moat
  Type identifié : {network effect / data / switching cost / ...}
  Force : {ÉLEVÉE / MOYENNE / FAIBLE}
  À 3 ans : {ce qu'il devient avec le volume}

Verdict stratégique
  Où jouer : {segment + axe}
  Comment gagner : {1-2 phrases sur le moat à construire}
  Where NOT to play : {segments à éviter}
```

## Règles absolues

1. **5-10 concurrents min** — pas 2, pas 20. Si <5, le marché est peut-être naissant ou mal défini.
2. **Toujours Porter + Blue Ocean** — pas juste la liste de concurrents.
3. **Moat doit être REAL**, pas un wishful thinking ("notre UX").
4. **Positioning map avec axes mesurables** — pas "qualité vs innovation".
5. **Reporter en français** style James — direct, pas de corpo-speak.
