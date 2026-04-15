---
name: james-market-sizing
description: Calcule le TAM/SAM/SOM d'un marché avec trois méthodologies (top-down, bottom-up, value theory). À utiliser pour sizer un marché, valider une opportunité business, préparer un pitch investor ou défendre un business plan. Déclencheurs typiques — "TAM", "SAM", "SOM", "taille du marché", "market sizing", "opportunité de marché", "combien ça vaut ce marché".
version: 1.0.0
---

# Market Sizing — TAM / SAM / SOM

Ce skill sort un sizing défendable d'un marché, avec hypothèses chiffrées et sources citées.

**Principe :** ne jamais sortir UN chiffre. Toujours **trianguler** par au moins 2 méthodes (top-down + bottom-up, idéalement + value theory). Si les trois convergent à ±30%, le sizing est solide. Si elles divergent de 2-3×, les hypothèses sont fragiles et il faut le signaler.

## Les trois tiers

### TAM — Total Addressable Market
Revenu total si on capture 100% du marché mondial / global pour ce type de produit.
- Usage : défendre la vision long terme. Montrer qu'on joue dans un marché assez gros pour justifier l'investissement.
- Exemple : "Tout le revenu des outils SaaS d'audit SEO dans le monde."

### SAM — Serviceable Available Market
Partie du TAM qu'on peut réellement servir vu notre tech, notre géographie, notre segment client cible.
- Usage : réalisme. C'est la cible crédible à 3-5 ans.
- Exemple : "Outils SaaS d'audit SEO pour PME tech en Europe et Amérique du Nord."

### SOM — Serviceable Obtainable Market
Part du SAM qu'on peut capturer concrètement année 1-2 vu notre capacité d'exécution, de distribution, de budget.
- Usage : plan de revenu à court terme. C'est ce qu'on promet aux investisseurs pour les 18-24 mois.
- Règle de base : 1-5% du SAM pour année 2 si on démarre sans moat ni notoriété.

## Méthodologie 1 — Top-Down

Part du chiffre global d'un rapport d'industrie, puis découpe.

**Procédure :**
1. Trouver 2-3 rapports d'industrie crédibles (Statista, Gartner, Forrester, IDC, IBISWorld, CB Insights, rapports d'équity analyst). Web search avec : "`{vertical}` market size 2025 report".
2. Noter la fourchette (ex : marché SaaS B2B = $350-420B en 2025 selon Gartner/Statista).
3. Appliquer successivement les filtres pour arriver au SAM :
   - Par segment (B2B vs B2C)
   - Par géo (monde → EU+NA → France)
   - Par taille cible (Enterprise vs SMB vs Indie)
4. SOM = 1-5% du SAM réaliste.

**Force :** rapide, rapports pré-mâchés.
**Faiblesse :** les rapports ont leurs propres biais (définitions élastiques, auto-publication par vendors). Toujours citer la source et la méthodo du rapport.

## Méthodologie 2 — Bottom-Up

Construit le TAM depuis la base : nombre de clients potentiels × revenu par client.

**Procédure :**
1. Identifier le **segment cible** concret (ex : "PME françaises avec site web et équipe marketing de 2+ personnes").
2. Trouver le **nombre de cibles** via sources officielles :
   - France : INSEE (SIRENE), Pappers, Infogreffe, Societe.com
   - Europe : Eurostat
   - Monde : Statista, Census.gov (US), OECD
3. Estimer l'**ARPU** (Average Revenue Per User/Account) réaliste — ≠ prix affiché, mais prix moyen réellement payé (remises, churn, free tier).
4. TAM = `Nb cibles` × `ARPU annuel`
5. SAM = TAM filtré par ce qu'on peut servir concrètement (outillage, langue, channel).
6. SOM = % capturable année 1-2, basé sur capacité commerciale (combien de deals fermés par mois × ACV).

**Force :** rigueur, chaque hypothèse est challengeable.
**Faiblesse :** demande du travail, et chaque hypothèse est une source d'erreur.

## Méthodologie 3 — Value Theory (Willingness To Pay)

Part de la valeur créée pour le client et en capture un %.

**Procédure :**
1. Quantifier la **valeur** que le produit crée (économie de temps, revenu généré, coût évité).
2. Appliquer un **capture rate** réaliste (15-30% de la valeur créée est la zone saine pour un SaaS B2B).
3. Multiplier par le nombre de clients cibles.

**Exemple :** un outil qui permet à une agence web d'économiser 10h/semaine sur l'audit SEO = 10h × 80€/h × 40 semaines = 32k€/an de valeur créée. Capture 20% = 6.4k€ ARPU réaliste. × 50 000 agences FR = 320 M€ TAM France.

**Force :** permet de pricer en fonction de la valeur, pas du coût.
**Faiblesse :** sensible aux hypothèses WTP. À utiliser en complément des 2 autres, pas seule.

## Triangulation

Après avoir fait 2-3 méthodes :

| Convergence | Interprétation | Action |
|---|---|---|
| Les 3 convergent à ±30% | Sizing solide | Reporter la moyenne, noter la fourchette |
| Divergence 2-3× | Hypothèses fragiles | Auditer quelle hypothèse tire le chiffre |
| Divergence >5× | Erreur dans une méthodo | Refaire ou écarter la plus faible |

**Règle :** toujours reporter la **fourchette**, pas un chiffre unique. Ex : "SAM France : entre 180 et 260 M€ selon les méthodes".

## Sources recommandées

- **Global** : Statista, Gartner, Forrester, IDC, CB Insights, Crunchbase (M&A / funding data)
- **France** : INSEE SIRENE (entreprises par NAF), Pappers, Societe.com, BPIFrance, France Digitale
- **Europe** : Eurostat, atomico State of European Tech report
- **SaaS benchmarks** : OpenView SaaS Benchmarks, ChartMogul, SaaStr
- **Wages / économies client** : Glassdoor, LinkedIn Salary, Apec (FR)

## Red flags à challenger

- TAM > 1 trillion → probablement trop large, redéfinir le segment
- SOM >10% du SAM année 1 → irréaliste sans moat très fort
- Pas de source citée → refaire
- Source unique sans triangulation → refaire
- ARPU identique au prix affiché sans churn/discount → irréaliste

## Format de sortie

```
Market Sizing — {nom du marché/produit}

TAM (Total Addressable Market)
  Méthode {top-down} : {chiffre} (source : {rapport}, {année})
  Méthode {bottom-up} : {chiffre} ({nb cibles} × {ARPU})
  Fourchette retenue : {X — Y}

SAM (Serviceable Available Market)
  Filtres appliqués : {géo}, {segment}, {taille}
  Chiffre : {X — Y}
  Justification : {1-2 lignes}

SOM (Serviceable Obtainable Market)
  Année 1 : {chiffre}
  Année 2 : {chiffre}
  Hypothèses : {deals fermés/mois, ACV, ramp}
  % du SAM : {X}%

Sources citées : {liste}
Hypothèses sensibles : {liste de ce qui pourrait casser le sizing}
```

## Règles absolues

1. **Toujours trianguler** par au moins 2 méthodes.
2. **Toujours citer les sources** avec année.
3. **Toujours sortir une fourchette**, jamais un chiffre unique déterministe.
4. **Toujours signaler les hypothèses sensibles** (ARPU, conversion rate, capture rate) qui peuvent faire varier le résultat.
5. **Reporter en français** dans le ton de James — pas de jargon consultant.
