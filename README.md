# Portfolio — Maroua RABI

Portfolio éditorial, responsive et data-driven construit avec Next.js, TypeScript, Tailwind CSS et Framer Motion.

## Installation

```bash
npm install
npm run dev
```

Ouvrez `http://localhost:3000`. Pour valider la version de production : `npm run build` puis `npm start`.

## Structure

- `app/` : pages et routes Next.js, dont `projects/[slug]`
- `components/` : navigation, cartes, animations, galerie/lightbox et composants visuels
- `data/` : profil, projets, parcours, expériences, compétences, certifications, événements et distinctions
- `public/images/` : photos et captures
- `public/cv/` : CV téléchargeable

## Modifier le contenu

- Informations personnelles : `data/profile.ts`
- Nouveau projet : ajoutez un objet typé dans `data/projects.ts`. Le slug crée automatiquement sa page.
- Images d’un projet : placez-les dans `public/images/projects/<slug>/`, puis ajoutez-les au champ `gallery` du projet (`src`, `alt`, `caption`, `category`).
- Certification : ajoutez une entrée dans `data/certifications.ts`. Le bouton credential n’apparaît que si l’URL existe.
- Conférence : ajoutez une entrée vérifiée dans `data/events.ts` et la photo dans `public/images/conferences/`.
- CV : déposez `Maroua_RABI_CV.pdf` dans `public/cv/`.

Les images absentes utilisent des visuels abstraits intégrés et ne cassent jamais les cartes. Les liens GitHub, démo et rapport sont également masqués lorsqu’ils ne sont pas renseignés.

## Dossiers d’images recommandés

Créez au besoin `profile`, `education`, `projects`, `clubs`, `conferences`, `achievements` et `certifications` sous `public/images`. Dans `projects`, utilisez un sous-dossier par slug.

## Déploiement Vercel

Importez le dépôt dans Vercel. Le framework Next.js est détecté automatiquement ; aucune variable d’environnement ni serveur externe n’est requis. Remplacez ensuite le domaine provisoire dans `app/layout.tsx`, `app/sitemap.ts` et `app/robots.ts`.

## TODO éditoriaux

- Dates exactes des trois premières formations
- Années manquantes de certaines certifications et liens de credentials
- Métriques et résultats validés des projets
- Contributions détaillées pour les projets en équipe
- URLs GitHub, démos et rapports
- Conférences et événements vérifiés
- Documentation des fiches Engineering Lab
- Photo professionnelle, captures, architectures et preuves des distinctions
