# FORMUP

FORMUP est une application de gestion de formations développée avec React, TypeScript et Tailwind CSS.
Elle a pour objectif de faciliter le suivi administratif et pédagogique des actions de formation tout en respectant les exigences de la certification **Qualiopi**.

## Pré-requis

- Node.js >= 18
- npm

## Installation

```bash
npm install
```

## Lancement en développement

```bash
npm run dev
```

## Construction pour la production

```bash
npm run build
```

## Aperçu des modules

- **Dashboard** : vue d'ensemble des indicateurs.
- **Sessions** : gestion des sessions de formation.
- **Documents** : stockage et génération des documents réglementaires (feuilles d'émargement, conventions, attestations).
- **Billing** : suivi de la facturation.
- **ELearning** : accès aux contenus e-learning.
- **CRM** : gestion de la relation client.
- **Automation** : automatisation de tâches (rappels, relances).

Chaque module sera connecté à un futur backend pour stocker les informations nécessaires au respect des critères Qualiopi : traçabilité des présences, évaluations, améliorations continues, etc.

## Conformité Qualiopi

L'application prévoit les fonctionnalités suivantes pour répondre aux exigences de la certification :

1. Suivi des participants et enregistrement des présences.
2. Collecte de la satisfaction et des évaluations à chaud/froid.
3. Génération automatique des documents obligatoires.
4. Historisation des actions correctives et d'amélioration continue.

Cette base de code est encore en cours de construction et de nombreuses fonctionnalités restent à implémenter.
