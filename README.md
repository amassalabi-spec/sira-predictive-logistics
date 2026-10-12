# 🚚 SIRA — Dashboard Logistique Prédictive

> **Next.js 14 + TypeScript + Tailwind CSS** — Visualisation temps réel, analytics prédictifs, gestion de crise, déploiement Vercel.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-14-000000?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://typescriptlang.org)
[![Tailwind](https://img.shields.io/badge/Tailwind%20CSS-3-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?logo=vercel)](https://vercel.com)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-Latest-000000?logo=shadcnui)](https://ui.shadcn.com)

---

## ✨ Fonctionnalités

| Module | Description |
|--------|-------------|
| 📊 **Dashboard Exécutif** | KPIs temps réel : expéditions actives, retards, coûts, taux de service |
| 🔮 **Moteur Prédictif** | Prédiction délais livraison (Genkit + IA), détection anomalies, optimisation routes |
| 🚨 **Salle de Crise** | Alertes temps réel, gestion incidents, escalade automatique, communication parties prenantes |
| 🔍 **Recherche Sémantique** | Query naturelle sur données logistiques (RAG léger via Genkit) |
| 📈 **Analytics Avancés** | Tendances historiques, saisonnalité, performance transporteurs, coûts unitaires |
| 👥 **Multi-client** | Sélecteur client, vues personnalisées, RBAC (Admin/Manager/Viewer) |

---

## 🏗 Architecture

```
sira-predictive-logistics/
├── src/
│   ├── app/                    # Next.js App Router (pages, layouts, API routes)
│   │   ├── dashboard/          # Pages dashboard (client, admin, crisis)
│   │   ├── api/                # API Routes (predictions, shipments, alerts)
│   │   └── globals.css         # Tailwind + custom styles
│   ├── components/
│   │   ├── dashboard/          # Widgets: ActiveShipment, PredictionEngine, CrisisRoom...
│   │   ├── ui/                 # shadcn/ui components (Button, Card, Table, Chart...)
│   │   └── providers/          # Context providers (Theme, Auth, WebSocket)
│   ├── ai/                     # Genkit flows (predict-shipment-timeline, sira-query)
│   │   ├── flows/              # Prompt engineering, structured output schemas
│   │   ├── genkit.ts           # Genkit config (Gemini, local models)
│   │   └── schemas/            # Zod schemas for AI I/O
│   ├── lib/                    # Utilities (date, format, validation, api client)
│   └── hooks/                  # Custom React hooks (useShipments, usePredictions...)
├── public/                     # Static assets
├── package.json                # Dependencies (no package-lock in git)
├── tailwind.config.ts          # Tailwind customization
├── tsconfig.json               # Strict TypeScript config
├── next.config.ts              # Next.js config (images, rewrites, headers)
├── .gitignore                  # node_modules, .next, .vercel, *.log, package-lock
└── LICENSE
```

---

## 🚀 Démarrage Rapide

### Prérequis
- Node.js 18+ / pnpm 9+
- Compte Vercel (pour déploiement)
- Clés API : Google AI (Gemini) pour Genkit

### 1. Installation
```bash
# Cloner
git clone https://github.com/amassalabi-spec/sira-predictive-logistics.git
cd sira-predictive-logistics

# Installer deps
pnpm install
```

### 2. Variables d'environnement
```bash
cp .env.example .env.local
# Éditer .env.local avec vos clés
```

```env
# .env.local
GOOGLE_AI_API_KEY=your_gemini_key
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

### 3. Développement
```bash
pnpm dev
# → http://localhost:3000
```

### 4. Build & Déploiement
```bash
# Build production
pnpm build

# Déploiement Vercel (auto via Git push)
vercel --prod
```

---

## 🔧 Configuration Genkit (IA)

```typescript
// src/ai/genkit.ts
import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/googleai';

export const ai = genkit({
  plugins: [googleAI({ apiKey: process.env.GOOGLE_AI_API_KEY })],
  model: 'googleai/gemini-1.5-flash',
});
```

**Flows disponibles** :
- `predict-shipment-timeline` — Prédiction ETA + facteurs de risque
- `sira-query` — Recherche sémantique sur données logistiques

---

## 📦 Stack Technique

| Catégorie | Technologies |
|-----------|--------------|
| **Framework** | Next.js 14 (App Router), React 18, TypeScript 5 |
| **Styling** | Tailwind CSS 3, shadcn/ui (Radix UI), Lucide Icons |
| **IA/ML** | Genkit (Google AI/Gemini), Zod schemas, Structured Output |
| **Charts** | Recharts / Chart.js (via shadcn/ui Chart component) |
| **State** | React Context + Hooks, TanStack Query (server state) |
| **Forms** | React Hook Form + Zod validation |
| **Deploy** | Vercel (Edge Functions, Analytics, Speed Insights) |
| **Quality** | ESLint, Prettier, TypeScript strict, Husky (pre-commit) |

---

## 🎯 Fonctionnalités IA Détaillées

### Prédiction Expéditions (`predict-shipment-timeline`)
```typescript
// Input
{ origin, destination, carrier, weight, volume, serviceLevel, historicalData[] }

// Output (Zod schema)
{
  predictedETA: Date,
  confidence: number,           // 0-1
  riskFactors: string[],        // ["weather", "customs", "carrier_delay"]
  recommendations: string[],    // ["reroute", "expedite", "notify_customer"]
  alternativeRoutes: Route[]
}
```

### Recherche Sémantique (`sira-query`)
- Query naturelle : *"Expéditions retardées vers Casablanca cette semaine"*
- RAG sur données structurées (SQL → Vector embeddings)
- Réponse structurée avec citations sources

---

## 📊 Dashboard — Vues Principales

| Vue | Widgets Clés | Utilisateur |
|-----|--------------|-------------|
| **Executive** | KPIs globaux, tendances 30j, top 5 risques | Direction |
| **Operations** | Table expéditions, filtres avancés, actions groupées | Ops/Managers |
| **Crisis Room** | Alertes temps réel, timeline incident, comms | Équipe crise |
| **Analytics** | Graphiques empilés, drill-down, export CSV/PDF | Analystes |

---

## 🤝 Contribuer

1. Fork → Branche (`feat/`, `fix/`, `chore/`)
2. `pnpm lint && pnpm typecheck` avant commit
3. Conventional Commits + Tests si nouvelle feature IA
4. PR → Preview Vercel auto → Review → Merge

---

## 📄 License

MIT License — Voir `LICENSE`

---

## 👤 Auteur

**MASSALABI OUMAROU Almajir**  
🇲🇦 Maroc | Data Science & AI Engineer  
🔗 [GitHub](https://github.com/amassalabi-spec) | 📧 amassalabi@gmail.com

---

> *"Logistique prédite = Décisions assurées"*