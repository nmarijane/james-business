---
name: james-mvp-scoping
description: Scope un MVP brutal — la version minimale qui teste la valeur. RICE/ICE pour prioriser, concierge MVP / Wizard of Oz pour éviter de coder, scope cutting agressif, time-boxing 6-8 semaines. À utiliser pour cadrer un MVP, couper des features, sortir d'un scope qui s'étale, ou décider quoi shipper en premier. Déclencheurs typiques — "scope MVP", "MVP minimum", "RICE", "ICE", "prioriser features", "couper le scope", "feature creep", "v1 minimum", "concierge MVP", "Wizard of Oz".
version: 1.0.0
---

# MVP Scoping — Le minimum qui valide

Ce skill évite l'erreur #2 des fondateurs (après "personne n'en veut") : builder 9 mois un produit complet au lieu d'un MVP focused 6 semaines.

**Principe :** un MVP n'est pas un "petit produit". C'est une **expérience** qui teste **une seule hypothèse** : est-ce que les gens vont utiliser le produit pour résoudre leur problème ? Si l'hypothèse n'est pas claire, le MVP n'est pas scopé.

## Étape 1 — Définir l'hypothèse à valider

Avant de parler features, formuler **l'hypothèse** que le MVP doit valider.

**Format hypothèse :**
> "Si {segment cible} a {problème}, alors {solution minimale} va leur faire {comportement mesurable} dans les {timeframe}."

**Exemples :**
- "Si **les freelances tech** ont **du mal à facturer en temps**, alors **un bot Slack qui envoie une facture en 1 clic** va leur faire **envoyer 80% de leurs factures en <5 min** dans les **2 semaines**."
- "Si **les SEO managers** veulent **monitorer leurs concurrents**, alors **un dashboard simple qui ping 5 sites et alerte sur changements** va leur faire **logger 3+ fois/semaine** dans le **1er mois**."

**Si tu peux pas formuler ça, ton MVP n'est pas scopé.** Tu ne sais pas ce que tu testes.

## Étape 2 — RICE / ICE pour prioriser les features

Tu fais la liste de toutes les features potentielles. Pour chacune, score sur 4 dimensions (RICE) :

### RICE

| Dimension | Définition | Échelle |
|---|---|---|
| **Reach** | Combien d'utilisateurs touchés par mois | Nombre absolu |
| **Impact** | Quel impact sur la valeur livrée | 0.25 / 0.5 / 1 / 2 / 3 |
| **Confidence** | Quelle certitude dans le scoring | 50% / 80% / 100% |
| **Effort** | Personne-mois pour la livrer | Décimal (0.5, 1, 2, 4…) |

**Formule :**
```
RICE Score = (Reach × Impact × Confidence) / Effort
```

### ICE (version rapide)

Quand t'as pas le temps pour RICE :

| Dimension | Échelle 1-10 |
|---|---|
| **Impact** | Quel impact sur l'hypothèse à valider |
| **Confidence** | Quelle certitude que ça va marcher |
| **Ease** | Facilité de build |

```
ICE Score = (Impact + Confidence + Ease) / 3
```

**Règle :** trier par score. **Garder les 3-5 features du haut.** Reporter le reste à v2.

## Étape 3 — Le scope cutting brutal

Pour chaque feature qui survit le scoring, poser ces 3 questions :

1. **Est-ce que cette feature teste l'hypothèse ?** Si non → coupe.
2. **Si je l'enlève, est-ce que le user peut faire l'action core ?** Si oui → coupe.
3. **Existe-t-il un hack (manuel, no-code, intégration tierce) qui livre le même résultat sans la coder ?** Si oui → fais le hack.

**Exemples de scope cutting agressifs :**

| Feature "demandée" | Hack possible |
|---|---|
| Système de notifications email | Mailchimp + webhook manuel |
| Dashboard analytics | Metabase / Notion view sur la base |
| Onboarding multi-étapes | Une seule page + Calendly pour onboarding humain |
| Stripe billing | Stripe Payment Links — pas de checkout custom |
| Auth complète (signup, reset, OAuth) | Magic link uniquement ou clerk/auth0 |
| Admin panel | Direct SQL via Retool ou Forest Admin |
| Mobile app | Mobile web responsive (98% des cas) |
| Multi-langue | Anglais only |
| Multi-tenancy enterprise | Single-tenant + créer manuellement par client |

## Étape 4 — Choisir le type de MVP

### 4 archétypes de MVP

#### A. Concierge MVP
Tu livres la valeur **manuellement** derrière une UI minimale. Le user croit que c'est automatisé, c'est toi.

- Quand : tu veux valider que le **résultat** intéresse, pas que le code marche
- Effort : très bas (UI minimale)
- Limite : ne scale pas. Mais c'est pas le but à ce stade.

**Exemple :** Zappos a commencé avec Nick Swinmurn qui allait acheter les chaussures dans des magasins et les expédiait lui-même.

#### B. Wizard of Oz MVP
L'UI est complète, mais le backend est manuel.

- Quand : tu veux tester l'UX et la promesse, mais pas encore investir dans l'IA / l'algo / l'automatisation
- Effort : moyen (UI complète, backend manuel)
- Limite : épuisant pour le fondateur après 50 users

**Exemple :** AnswerThePublic à ses débuts générait certaines pages manuellement avant d'automatiser.

#### C. No-code MVP
Construit sur Bubble, Webflow + Airtable, Glide, Softr, Make/Zapier.

- Quand : la logique business est simple, mais tu veux scaler à 100-1000 users sans coder
- Effort : moyen (apprentissage no-code + setup)
- Limite : tu vas devoir réécrire si ça marche

**Exemple :** Comet, Lambda School Lite, beaucoup de marketplaces niches.

#### D. Single-feature MVP
Tu codes la feature core, point. Pas d'auth, pas de dashboard, pas de paywall — juste la feature.

- Quand : la feature est **le** différenciateur, et tu sais coder
- Effort : moyen-élevé (focus sur 1 chose)
- Limite : nécessite que la feature soit vraiment magique pour retenir sans onboarding

**Exemple :** Loom v1 = enregistrement écran + lien partage. Rien d'autre.

### Comment choisir

```
Est-ce que tu peux délivrer la valeur manuellement à <50 users ?
├── Oui → Concierge ou Wizard of Oz
└── Non →
    Est-ce que la logique est simple (CRUD + workflows) ?
    ├── Oui → No-code MVP
    └── Non → Single-feature MVP (tu codes la feature core)
```

## Étape 5 — Time-boxing : 6-8 semaines max

**Règle :** un MVP qui prend >8 semaines à builder n'est pas un MVP. C'est un produit.

- **Semaines 1-2** : design + setup technique + landing
- **Semaines 3-6** : build de la feature core
- **Semaines 7-8** : tests utilisateurs + ajustements + launch

**Si tu déborde** : c'est que ton scope est trop large. Re-coupe. Le scope cutting est **continu**, pas un événement.

**Anti-patterns à reconnaître :**
- "Je veux que ce soit parfait avant de lancer" → tu retardes le feedback
- "Il faut absolument la feature X" → c'est rarement vrai à v1
- "C'est pas scalable" → c'est pas le but du MVP
- "Les users vont demander Y" → ils diront le contraire de ce que tu prévois, lance et écoute

## Étape 6 — Définir le critère de succès

**Avant de coder**, écrire : "Le MVP est un succès si **{métrique}** atteint **{seuil}** dans les **{timeframe}**."

**Exemples :**
- "Le MVP est un succès si **30 users** font **l'action core 3+ fois/semaine** pendant **4 semaines consécutives**."
- "Le MVP est un succès si **5 clients** payent **$50+/mois** dans les **8 semaines** post-launch."
- "Le MVP est un succès si la **rétention D30** atteint **25%** sur la première cohorte."

**Si tu n'arrives pas à écrire ça, tu vas livrer le MVP, regarder les chiffres, et te demander si c'est un succès ou pas. Trop tard.**

## Format de sortie

```
MVP Scope — {projet}

Hypothèse à valider
  Si {segment} a {problème},
  alors {solution minimale}
  va leur faire {comportement mesurable}
  dans les {timeframe}.

Type de MVP : {Concierge / Wizard of Oz / No-code / Single-feature}

Features prioritisées (RICE/ICE)
  ✅ {feature 1} — score X — dans le scope
  ✅ {feature 2} — score X — dans le scope
  ✅ {feature 3} — score X — dans le scope
  ⏸ {feature 4} — score X — reporté v2
  ❌ {feature 5} — peut être remplacée par {hack manuel}

Scope cutting appliqué
  {liste des features coupées + leur remplacement manuel/no-code}

Time-boxing
  Semaines 1-2 : {actions}
  Semaines 3-6 : {actions}
  Semaines 7-8 : {actions}

Critère de succès
  Le MVP est un succès si {métrique} ≥ {seuil} dans {timeframe}.

Critère d'échec / kill-switch
  Si après {X semaines} on n'a pas {seuil}, on pivote ou on tue.
```

## Skills liés

- **`james-validation`** — un MVP ne se scope que si la validation a un score ≥7/10. Sinon on re-valide d'abord.
- **`james-gtm`** — le critère de succès du MVP doit s'aligner sur le channel d'acquisition prévu. Si on lance via Product Hunt, le critère doit refléter un usage post-pic d'attention.
- **`james-metrics-framework`** — le critère de succès est typiquement une North Star Metric. Définir avec `metrics-framework` si pas évident.
- **`james-team-composition`** — le time-boxing 6-8 semaines suppose une équipe alignée. Si t'es solo et pas full-time, doubler les estimations.
- **`james-financial-modeling`** — le MVP a un coût (infra, no-code tools, freelance). À budgeter dans le burn.

## Outils requis

Pas de dépendance externe bloquante. **`WebSearch`** utile pour benchmarker des MVPs analogues (ce que d'autres startups du même secteur ont scopé en v1).

## Règles absolues

1. **Hypothèse formulée AVANT de scoper** — pas de MVP sans hypothèse claire.
2. **3-5 features max** en v1. Au-delà, c'est plus un MVP.
3. **Le scope cutting est continu** — re-couper chaque semaine, pas une seule fois au début.
4. **Time-box 6-8 semaines max** — si tu débordes, re-coupe, ne reporte pas.
5. **Critère de succès chiffré, écrit AVANT le launch**.
6. **Concierge / Wizard of Oz d'abord** si la valeur peut être livrée manuellement.
7. **Reporter en français** style James — direct, pas de jargon agile.
