---
name: james-validation
description: Valide qu'un problème existe et que la solution intéresse vraiment des gens — avant de coder. Mom Test pour interviews, landing page tests, Sean Ellis PMF survey, smoke tests, signaux de demande. À utiliser pour valider une idée avant un MVP, sortir du syndrome "build it and they will come", ou vérifier un PMF naissant. Déclencheurs typiques — "valider mon idée", "interviews clients", "Mom Test", "landing page test", "PMF", "product-market fit", "Sean Ellis", "smoke test", "waitlist".
version: 1.0.0
---

# Validation — Avant le MVP

Ce skill évite l'erreur #1 des fondateurs : coder pendant 6 mois quelque chose dont personne ne veut.

**Principe :** la validation est **comportementale**, pas déclarative. Ce que les gens **disent** vouloir ≠ ce qu'ils **font**. Toujours chercher un signal d'action (paiement, signup, partage), jamais juste un "oui c'est intéressant".

## Étape 1 — Problem interviews (Mom Test)

**Pourquoi "Mom Test" ?** Rob Fitzpatrick : si tu poses bien tes questions, même ta mère ne peut pas te mentir sur ton idée.

### Les 3 règles du Mom Test

1. **Parler de leur vie, pas de ton idée** — Ne JAMAIS pitcher avant d'avoir compris leur quotidien.
2. **Poser des questions sur le passé concret, pas sur des opinions futures** — "Comment t'as géré ça la dernière fois ?" ≠ "Tu paierais pour ça ?"
3. **Écouter, taire, creuser** — Pas argumenter, pas vendre, pas convaincre.

### Bonnes vs mauvaises questions

| ❌ Mauvaise (opinion / futur hypothétique) | ✅ Bonne (comportement / passé concret) |
|---|---|
| "Tu trouves pas ça pénible de gérer ta compta ?" | "Comment t'as géré ta compta la semaine dernière ?" |
| "T'utiliserais une app pour faire ça ?" | "Qu'est-ce que t'as essayé pour résoudre ce problème ?" |
| "Tu paierais 30€/mois pour ça ?" | "Combien tu dépenses aujourd'hui pour résoudre ce problème ?" |
| "T'aimerais avoir une fonctionnalité X ?" | "Quand t'as eu ce problème la dernière fois, qu'est-ce qui t'a empêché de le régler ?" |

### Signaux à chercher dans une interview

- **Le problème existe** : douleur exprimée spontanément, pas en réponse à ta question leading
- **Le problème est cher** : il dépense déjà du temps/argent dessus (excel, freelance, autre outil, hack interne)
- **Le moment est mûr** : il a essayé de résoudre récemment (< 3 mois)
- **Il est en charge** : c'est lui qui décide / paie / utilise

**Red flags à ignorer :**
- "C'est intéressant" (= poli, pas convaincu)
- "Ça pourrait être utile" (= conditionnel, pas réel)
- "Je connais quelqu'un qui aurait besoin de ça" (= pas lui, donc inutile)
- "Tu devrais ajouter X" (= designer arm-chair, sans skin in the game)

### Combien d'interviews ?

- **5 interviews** : tu repères les patterns évidents
- **10-15 interviews** : tu valides ou invalides l'hypothèse de problème
- **20+** : tu valides ou invalides les segments client (qui souffre le plus)

**Règle :** continuer jusqu'à ce que les 3 dernières interviews n'apportent rien de nouveau (saturation).

## Étape 2 — Signaux de demande (avant code)

Avant de coder une ligne, vérifier que des gens **agissent**, pas juste qu'ils **disent**.

### Landing page + waitlist

**Setup minimal :**
- 1 page (Carrd, Framer, Webflow) — promesse claire + CTA email
- Trafic ciblé via Reddit, X, LinkedIn, communautés, paid ads ($50-200 test)
- Mesurer : **taux de conversion visiteur → email**

**Benchmarks :**
- **<2%** : la promesse n'accroche pas. Refaire le messaging.
- **2-5%** : intérêt modéré, à creuser.
- **5-15%** : bon signal. Passer à l'étape suivante.
- **>15%** : excellent signal ou trafic ultra-ciblé. Vérifier la qualité.

### Smoke test (concierge / Wizard of Oz)

Vendre le produit **avant** qu'il existe. Tu livres manuellement derrière. Permet de valider :
- Le pricing (les gens paient ?)
- Le messaging (ils comprennent l'offre ?)
- L'usage réel (qu'est-ce qu'ils font une fois dedans ?)

**Exemple :** Stripe a démarré comme un service où Patrick et John intégraient manuellement les paiements pour les clients pendant qu'ils codaient le SDK derrière.

### Pre-sales / Lettres d'intention

Le test ultime : **les gens paient avant que le produit existe**.

- Pré-vente avec discount (-30 à -50%) en échange d'un engagement de payer maintenant
- LOI (Letter of Intent) pour les ventes B2B enterprise — pas du cash mais un engagement signé
- Crowdfunding (Kickstarter, Indiegogo) pour les produits consumer

**Si tu n'arrives pas à pre-sell 5-10 clients à un discount agressif → ton idée n'est pas assez douloureuse.**

## Étape 3 — Sean Ellis Test (PMF naissant)

Une fois que t'as 30-100 utilisateurs **actifs** (pas juste signups), pose la question :

> "Comment te sentirais-tu si tu ne pouvais plus utiliser {produit} ?"
> - Très déçu
> - Plutôt déçu
> - Pas vraiment déçu
> - Pas applicable, je ne l'utilise plus

**Règle des 40%** (Sean Ellis) : si **≥40% des users actifs répondent "très déçu"**, tu as un PMF naissant. En-dessous de 40%, pas encore.

**Précisions :**
- N'envoyer qu'aux **users actifs** (logged in dans les 14 derniers jours), pas à tout le monde
- Échantillon min : **30 répondants** pour être statistiquement utile
- Compléter avec : "Qu'est-ce qui t'a fait choisir notre produit ?" et "Quel type de personne en bénéficierait le plus ?"

## Étape 4 — Retention cohort (le vrai signal PMF)

**La rétention est le seul vrai signal de PMF.** Si les gens reviennent, t'as quelque chose. S'ils signup et partent, t'as un effet d'annonce.

### Cohort curve

Pour chaque cohorte hebdomadaire d'utilisateurs, mesurer le % qui reste actif aux semaines suivantes.

**Patterns possibles :**

```
% actifs
   ↑
100 ●
    │\
 50 │ ●─────────● Décroissance puis plateau = PMF (smile curve)
    │  \
 30 │   ●─────────●
    │
  0 │_____________________→ semaines
       1   2   3   4   5+
```

**Versus :**

```
% actifs
   ↑
100 ●
    │\
 50 │ \
    │  \
 10 │   ●_______●______● Décroissance jusqu'à 0 = pas de PMF
  0 │______________________→ semaines
```

**Benchmarks SaaS :**
- **D7 retention** : 40%+ pour un PMF naissant
- **D30 retention** : 25%+ pour un PMF naissant
- **Plateau M3+** : si tu vois un plateau (la courbe arrête de descendre), c'est le signal le plus fort qui existe

### NDR (Net Dollar Retention) en complément

Pour du B2B SaaS payant, le NDR (alias NRR) à 100%+ est un super signal d'usage croissant.

## Étape 5 — Synthèse — Verdict de validation

Tu construis un score sur 5 dimensions :

| Dimension | Signal | Score |
|---|---|---|
| Douleur du problème (interviews) | 8+ users sur 10 ont essayé de résoudre récemment | 0-2 |
| Demande comportementale | Landing >5% conversion OU 10+ pre-sales | 0-2 |
| Sean Ellis | ≥40% "very disappointed" | 0-2 |
| Rétention | D30 ≥25% + plateau | 0-2 |
| Willingness to pay | Au moins 1 pre-sale ou paiement réel | 0-2 |

**Total :**
- **0-3** : pas de validation. Ne pas builder un MVP, reformuler le problème.
- **4-6** : signaux mitigés. Itérer sur le messaging ou le segment cible avant MVP.
- **7-8** : signaux solides. Builder un MVP focused.
- **9-10** : signaux excellents. Builder vite et serrer le segment qui a converti.

## Format de sortie

```
Validation Check — {projet}

Stade : {idée / pre-MVP / MVP early / post-launch}

Interviews
  Nb réalisées : {X}
  Signaux de douleur réels : {oui/non + exemples}
  Segment qui souffre le plus : {description}

Signaux comportementaux
  Landing page : {X% conversion sur Y visiteurs}
  Pre-sales : {Nb + montant total}
  Waitlist : {Nb signups + croissance MoM}

Sean Ellis Test
  % "very disappointed" : {X%}
  Echantillon : {N répondants}
  Verdict : {PMF naissant / pas encore / pas encore mesurable}

Rétention
  D7 : {X%}
  D30 : {X%}
  Plateau observé : {oui/non, à quel %}

Score validation : {X/10}

Verdict : {GO MVP / ITERATE MESSAGING / REFORMULATE PROBLEM / PIVOT}

Prochaines étapes
  1. {action concrète}
  2. {...}
```

## Skills liés

- **`james-market-sizing`** — un signal de validation fort sur un SAM de 200 entreprises ne pèse pas pareil qu'un signal modéré sur 200k. Toujours croiser le score validation avec la taille du marché.
- **`james-mvp-scoping`** — un score validation 7+ déclenche le scoping du MVP. Sous 7, on ne scope pas, on re-valide.
- **`james-competitive-landscape`** — si les interviews révèlent qu'ils utilisent X concurrent, ajouter X à la liste compétitive (étape 1) de `competitive-landscape`.
- **`james-metrics-framework`** — la rétention D7/D30 est une métrique du framework. Si on l'instrumente ici, elle alimente le metrics-framework.

## Outils requis

Pas de dépendance externe bloquante. **`WebSearch`** utile pour benchmarks sectoriels de rétention (Mixpanel benchmarks, Amplitude reports) ou pour repérer des cas analogues qui ont validé/échoué.

## Règles absolues

1. **Comportement > déclaration** — toujours chercher un signal d'action, pas un "oui c'est cool".
2. **Mom Test obligatoire pour les interviews** — pas de questions hypothétiques sur le futur.
3. **5 interviews min, 15 idéal, 20+ pour segmenter**.
4. **Sean Ellis sur users actifs uniquement**, pas sur tous les signups.
5. **Rétention en cohort, pas en moyenne agrégée** — les moyennes masquent les vraies courbes.
6. **Pre-sale > waitlist > interview** — l'argent qui sort du portefeuille est le meilleur signal.
7. **Reporter en français** style James.
