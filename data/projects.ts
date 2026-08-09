import type { Project } from "./types";
const common = {
  challenge:
    "Transformer une problématique concrète en système fiable, lisible et exploitable.",
  contribution:
    "Conception, expérimentation et intégration des briques techniques du projet.",
  results: ["Résultats chiffrés à documenter."],
  learnings: [
    "Conception de pipelines de bout en bout",
    "Arbitrage entre expérimentation et ingénierie",
  ],
};
export const projects: Project[] = [
  {
    slug: "frameworkai-pentest",
    title: "FrameworkAI-Pentest",
    domain: "Cybersecurity · AI",
    summary:
      "Automatisation intelligente du pentest Web par orchestration multi-outils, Machine Learning, Agentic AI et Federated Learning.",
    overview:
      "Une plateforme qui structure un pentest Web de la reconnaissance jusqu’au reporting assisté par IA.",
    challenge:
      "Unifier des outils hétérogènes et restituer des vulnérabilités actionnables sans masquer la traçabilité technique.",
    solution:
      "Un pipeline orchestré, une couche de normalisation, un scoring de risque ML et des fonctions d’assistance agentique.",
    contribution:
      "Conception et développement de la plateforme dans le cadre du stage professionnel chez SANLAM.",
    categories: ["Cybersecurity", "AI / ML"],
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "Nmap",
      "OWASP ZAP",
      "Nikto",
      "Nuclei",
      "OpenVAS",
      "Scikit-learn",
      "Flower",
      "FedAvg",
    ],
    featured: true,
    heroImage: {
      src: "/images/projects/frameworkai-pentest/frameworkai-splash.webp",
      alt: "Écran de lancement de FrameworkAI-Pentest",
      caption: "FrameworkAI-Pentest — Intelligent Offensive Security Framework",
      category: "Interface",
    },
    gallery: [
      {
        src: "/images/projects/frameworkai-pentest/frameworkai-splash.webp",
        alt: "Écran de lancement de FrameworkAI-Pentest",
        caption: "Écran de lancement de la plateforme",
        category: "Interface",
      },
      {
        src: "/images/projects/frameworkai-pentest/frameworkai-components.png",
        alt: "Diagramme de composants de FrameworkAI-Pentest",
        caption: "Modules et outils orchestrés",
        category: "Architecture",
      },
      {
        src: "/images/projects/frameworkai-pentest/frameworkai-fedavg.png",
        alt: "Architecture Federated Learning avec serveur FedAvg",
        caption: "Architecture Federated Learning",
        category: "Architecture",
      },
      {
        src: "/images/projects/frameworkai-pentest/frameworkai-shapley.png",
        alt: "Visualisation Shapley du modèle de scoring",
        caption: "Interprétabilité du scoring",
        category: "Results",
      },
    ],
    pipeline: [
      "Scope",
      "OSINT",
      "Subdomains",
      "Fingerprinting",
      "Host Discovery",
      "Port Scan",
      "Enumeration",
      "Crawling",
      "Vulnerability Scanning",
      "Validation",
      "AI Risk Scoring",
      "AI Reporting",
    ],
    highlights: [
      "Orchestration multi-outils",
      "Scoring ML",
      "Federated Learning",
      "Agentic AI",
    ],
    results: [
      "Figures de validation et d’interprétabilité disponibles dans la galerie ; métriques numériques non publiées sans contexte validé.",
    ],
    learnings: [
      "Orchestration de scanners de sécurité",
      "Normalisation des résultats",
      "Conception d’un pipeline traçable",
    ],
  },
  {
    slug: "smarttour-maroc",
    title: "SmartTour Maroc",
    domain: "Mobile · AI · Recommendation",
    summary:
      "Une expérience touristique personnalisée par géolocalisation, recommandation, chatbot et apprentissage par renforcement.",
    overview:
      "Application mobile et services intelligents pour construire des itinéraires adaptés aux préférences du voyageur.",
    ...common,
    solution:
      "Une architecture mobile–backend enrichie par des services de recommandation et de conversation.",
    categories: ["AI / ML"],
    technologies: ["React Native", "Expo", "Spring Boot", "Python"],
    featured: true,
    heroImage: {
      src: "/images/projects/smarttour/smarttour-splash.webp",
      alt: "Écran d’accueil de l’application SmartTour Morocco",
      caption: "Écran d’accueil",
      category: "Interface",
    },
    previewImages: [
      { src: "/images/projects/smarttour/smarttour-splash.webp", alt: "Écran de lancement de SmartTour Morocco" },
      { src: "/images/projects/smarttour/smarttour-home.webp", alt: "Page d’accueil de SmartTour Morocco" },
      { src: "/images/projects/smarttour/smarttour-map.webp", alt: "Carte et géolocalisation de SmartTour Morocco" },
      { src: "/images/projects/smarttour/smarttour-ai-chat.webp", alt: "Assistant IA SmartGuide de SmartTour Morocco" },
    ],
    gallery: [
      {
        src: "/images/projects/smarttour/smarttour-splash.webp",
        alt: "Écran de lancement de l’application SmartTour Morocco",
        caption: "Splash screen",
        category: "Interface",
      },
      {
        src: "/images/projects/smarttour/smarttour-home.webp",
        alt: "Page d’accueil de SmartTour Morocco",
        caption: "Accueil et recommandations personnalisées",
        category: "Interface",
      },
      {
        src: "/images/projects/smarttour/smarttour-map.webp",
        alt: "Carte et géolocalisation de SmartTour Morocco",
        caption: "Carte des monuments à proximité",
        category: "Interface",
      },
      {
        src: "/images/projects/smarttour/smarttour-ai-chat.webp",
        alt: "Conversation avec l’assistant IA SmartGuide",
        caption: "Assistant de voyage intelligent",
        category: "Interface",
      },
    ],
    highlights: [
      "Géolocalisation",
      "Classification des préférences",
      "Génération d’itinéraires",
      "Chatbot intelligent",
      "Personnalisation RL",
    ],
  },
  {
    slug: "maintenance-predictive-mlops",
    title: "MLOps & DataOps — Maintenance prédictive",
    shortTitle: "Maintenance prédictive",
    domain: "MLOps · Industrie",
    summary:
      "Un pipeline reproductible pour anticiper les pannes et réduire les arrêts de production.",
    overview:
      "Industrialisation du cycle ML, de la donnée jusqu’à l’exposition du meilleur modèle.",
    ...common,
    solution:
      "Dagster orchestre les étapes, MLflow suit les expériences et FastAPI expose le modèle retenu.",
    categories: ["MLOps", "AI / ML"],
    technologies: [
      "Python",
      "Scikit-learn",
      "MLflow",
      "Dagster",
      "FastAPI",
      "Docker",
    ],
    featured: true,
    heroImage: {
      src: "/images/projects/mlops-maintenance/mlops-final-metrics.png",
      alt: "Synthèse des métriques du modèle Gradient Boosting",
      caption: "Synthèse du modèle retenu",
      category: "Results",
    },
    gallery: [
      {
        src: "/images/projects/mlops-maintenance/mlops-final-metrics.png",
        alt: "Synthèse des métriques du modèle Gradient Boosting",
        caption: "Métriques finales — seuil 0,18",
        category: "Results",
      },
      {
        src: "/images/projects/mlops-maintenance/mlops-confusion-matrix.png",
        alt: "Matrice de confusion du modèle de maintenance prédictive",
        caption: "Matrice de confusion",
        category: "Results",
      },
      {
        src: "/images/projects/mlops-maintenance/mlops-feature-importance.png",
        alt: "Importance des variables du modèle de maintenance prédictive",
        caption: "Feature importance",
        category: "Results",
      },
    ],
    results: [
      "Le dépôt local documente un pipeline testé de bout en bout et 100 000 relevés de capteurs chargés.",
      "La galerie expose les métriques produites par le modèle ; leur interprétation doit rester liée au protocole du projet.",
    ],
    pipeline: [
      "Data",
      "Preprocessing",
      "Training",
      "Evaluation",
      "MLflow",
      "Best model",
      "FastAPI",
      "Deployment",
    ],
  },
  {
    slug: "wms-ai-vision",
    title: "WMS augmenté par l’IA",
    domain: "Computer Vision · Logistics",
    summary:
      "Gestion intelligente d’entrepôt à travers la vision, la détection d’objets et la lecture de QR codes.",
    overview: "Un prototype de suivi de stock piloté par des caméras.",
    ...common,
    solution:
      "Détection des objets, localisation et lecture du QR code, vérification puis mise à jour du stock.",
    categories: ["Computer Vision", "AI / ML"],
    technologies: ["Python", "YOLOv8", "OpenCV", "CUDA", "QR Code"],
    featured: true,
    heroImage: {
      src: "/images/projects/wms-yolo/wms-poster-team.webp",
      alt: "Équipe du projet WMS augmenté par l’IA devant son poster à la FSBM",
      caption: "Présentation du projet à la Journée des Posters FSBM",
      category: "Award",
    },
    gallery: [
      {
        src: "/images/projects/wms-yolo/wms-poster-team.webp",
        alt: "Équipe du projet WMS augmenté par l’IA devant son poster à la FSBM",
        caption: "L’équipe devant le poster du projet",
        category: "Award",
      },
      {
        src: "/images/projects/wms-yolo/wms-technical-poster.webp",
        alt: "Poster technique du projet WMS augmenté par l’intelligence artificielle",
        caption: "Méthodologie, pipeline YOLOv8 et résultats du projet",
        category: "Results",
      },
      {
        src: "/images/projects/wms-yolo/wms-award-ceremony.webp",
        alt: "Remise de distinction lors de la Journée des Posters FSBM",
        caption: "Remise du 2e prix du meilleur projet",
        category: "Award",
      },
    ],
    award: "2e prix du meilleur projet — Journée des Posters FSBM",
    pipeline: [
      "Camera",
      "Object Detection",
      "QR localization",
      "QR reading",
      "Database verification",
      "Stock update",
    ],
  },
  {
    slug: "lambda-vs-kappa",
    title: "Lambda vs Kappa Architecture",
    domain: "Data Engineering · Streaming",
    summary:
      "Étude architecturale d’une plateforme de trading temps réel, du producteur à la visualisation.",
    overview:
      "Comparaison appliquée entre une architecture Batch + Streaming et une approche streaming-first.",
    ...common,
    solution:
      "Kafka transporte les événements, Flink les traite, PostgreSQL les conserve et Grafana les présente.",
    categories: ["Data Engineering", "Distributed Systems"],
    technologies: ["Kafka", "Flink", "PostgreSQL", "Grafana", "Docker"],
    featured: true,
    heroImage: {
      src: "/images/projects/lambda-kappa/lambda-kappa-cover.webp",
      alt: "Couverture de la présentation Lambda Architecture vs Kappa Architecture",
      caption: "Plateforme de trading en temps réel",
      category: "Architecture",
    },
    gallery: [
      {
        src: "/images/projects/lambda-kappa/lambda-kappa-cover.webp",
        alt: "Couverture de la présentation Lambda Architecture vs Kappa Architecture",
        caption: "Étude comparative appliquée à une plateforme de trading en temps réel",
        category: "Architecture",
      },
    ],
    pipeline: ["Producer", "Kafka", "Flink", "PostgreSQL", "Grafana"],
    highlights: [
      "Lambda : Batch + Streaming",
      "Kappa : Streaming-first",
      "Kafka replay",
    ],
  },
  {
    slug: "cardiovascular-prediction",
    title: "Prédiction des maladies cardiovasculaires — PFE",
    shortTitle: "PFE Cardiovasculaire",
    domain: "Machine Learning · Health",
    summary:
      "Prototype académique de prédiction sur plus de 70 000 observations cliniques avec alerte email.",
    overview:
      "Une chaîne de data mining allant de la préparation des données à une interface Streamlit.",
    ...common,
    solution:
      "Prétraitement, feature engineering, rééquilibrage, comparaison de modèles et application de prédiction.",
    categories: ["AI / ML"],
    technologies: [
      "Python",
      "Scikit-learn",
      "SMOTE",
      "Data Mining",
      "Streamlit",
    ],
    featured: true,
    heroImage: {
      src: "/images/projects/cardiovascular/cardio-graduation-hero.webp",
      alt: "Portrait de diplomation de Maroua RABI à la FSBM",
      caption: "Diplomation à la Faculté des Sciences Ben M’Sik",
      category: "Award",
    },
    gallery: [
      {
        src: "/images/projects/cardiovascular/cardio-pfe-presentation.webp",
        alt: "Présentation du PFE de prédiction cardiovasculaire devant le jury",
        caption: "Présentation de la problématique et du système",
        category: "Interface",
      },
      {
        src: "/images/projects/cardiovascular/cardio-pfe-closing.webp",
        alt: "Clôture de la soutenance du PFE cardiovasculaire",
        caption: "Clôture de la soutenance académique",
        category: "Interface",
      },
      {
        src: "/images/projects/cardiovascular/cardio-graduation-portrait.webp",
        alt: "Portrait de diplomation à la FSBM",
        caption: "Diplomation à la Faculté des Sciences Ben M’Sik",
        category: "Award",
      },
      {
        src: "/images/projects/cardiovascular/cardio-graduation-moment.webp",
        alt: "Moment de diplomation à la FSBM",
        caption: "Aboutissement du parcours de Licence d’Excellence",
        category: "Award",
      },
    ],
    disclaimer:
      "Prototype académique d’aide à la décision, et non dispositif médical.",
    pipeline: [
      "Preprocessing",
      "Feature engineering",
      "Class balancing",
      "Model comparison",
      "Prediction",
      "Streamlit application",
      "Email alert",
    ],
  },
  {
    slug: "sharpness-aware-minimization",
    title: "Sharpness-Aware Minimization",
    domain: "Deep Learning · Optimization",
    summary: "Analyse comparative de SAM, SGD et Adam sur Fashion-MNIST.",
    overview:
      "Étude de la convergence, de la généralisation et des minima plats pour l’entraînement de CNN.",
    ...common,
    solution:
      "Un protocole expérimental commun pour observer loss, accuracy, convergence et loss landscape.",
    categories: ["Deep Learning"],
    technologies: ["Python", "PyTorch", "CNN", "SAM", "SGD", "Adam"],
  },
  {
    slug: "dream-nlp",
    title: "Analyse intelligente des rêves et de l’état psychologique",
    domain: "NLP · Transformers",
    summary:
      "Application expérimentale de NLP pour explorer sémantique et tendances émotionnelles dans des récits.",
    overview:
      "Une expérimentation textuelle centrée sur l’analyse sémantique et la restitution prudente d’indicateurs.",
    ...common,
    solution:
      "Des modèles Transformers analysent le texte et structurent des tendances interprétables.",
    categories: ["NLP"],
    technologies: ["Python", "NLP", "Transformers", "Hugging Face"],
    disclaimer:
      "Expérimentation NLP uniquement — ce projet ne constitue pas un outil de diagnostic médical.",
  },
  {
    slug: "devops-infrastructure",
    title: "Infrastructure DevOps automatisée & monitoring",
    domain: "Cloud · DevOps",
    summary:
      "Provisionnement, déploiement et supervision d’une infrastructure reproductible.",
    overview: "Chaîne automatisée de livraison et d’observabilité sur AWS.",
    ...common,
    solution:
      "Infrastructure as Code, configuration automatisée, conteneurisation, orchestration et monitoring.",
    categories: ["DevOps"],
    technologies: [
      "AWS",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Ansible",
      "CI/CD",
    ],
    pipeline: ["Code", "CI/CD", "Docker", "Kubernetes", "AWS", "Monitoring"],
    highlights: [
      "CPU, RAM et réseau",
      "Services et disponibilité",
      "Performances et anomalies",
    ],
  },
  {
    slug: "auto-price-morocco",
    title: "Prédiction du prix des automobiles au Maroc",
    domain: "Machine Learning · Scraping",
    summary:
      "Modélisation du prix à partir de plus de 22 000 annonces collectées.",
    overview: "De la collecte Web à une interface de prédiction Streamlit.",
    ...common,
    solution:
      "Scraping, nettoyage, feature engineering, modélisation et restitution interactive.",
    categories: ["AI / ML"],
    technologies: ["Web Scraping", "Machine Learning", "Streamlit"],
  },
  {
    slug: "fraud-detection",
    title: "Fraud Detection",
    domain: "Finance · Classification",
    summary:
      "Détection sur données fortement déséquilibrées, orientée recall et optimisation du seuil.",
    overview:
      "Un exercice de classification où le coût des faux négatifs guide les choix.",
    ...common,
    solution:
      "Rééquilibrage SMOTE, comparaison de modèles et calibration du seuil de décision.",
    categories: ["AI / ML"],
    technologies: ["Machine Learning", "SMOTE", "Classification"],
  },
  {
    slug: "blockchain-diploma",
    title: "Blockchain Diploma Verification",
    domain: "Blockchain · Trust",
    summary:
      "Émission et vérification décentralisée de diplômes via smart contracts.",
    overview:
      "Une preuve d’intégrité et de traçabilité consultable sans autorité centrale unique.",
    ...common,
    solution:
      "Smart contracts pour l’émission, l’authentification et la vérification.",
    categories: ["Blockchain"],
    technologies: ["Ethereum", "Solidity", "Web3.js", "Smart Contracts"],
  },
  {
    slug: "hospital-bi",
    title: "Analyse des données hospitalières",
    domain: "Business Intelligence",
    summary:
      "KPIs, filtres et tableaux de bord pour l’analyse décisionnelle hospitalière.",
    overview:
      "Transformation de données hospitalières en vues synthétiques et explorables.",
    ...common,
    solution: "Modèle analytique, mesures DAX et dashboards Power BI.",
    categories: ["Business Intelligence"],
    technologies: ["Power BI", "DAX"],
  },
  {
    slug: "crop-yield-prediction",
    title: "Crop Yield Prediction",
    domain: "Machine Learning · Remote Sensing",
    summary:
      "Prédiction du rendement agricole par fusion de données satellitaires Sentinel-2 et de variables environnementales.",
    overview:
      "Projet data science de première année de Master structuré comme un système de production, depuis l’extraction d’un sous-ensemble exploitable jusqu’à l’inférence et l’interface Web.",
    challenge:
      "Exploiter des données multimodales et non linéaires tout en maîtrisant un volume initial de 2,6 To, des fichiers HDF5 corrompus et l’alignement spatio-temporel des sources.",
    solution:
      "Un pipeline modulaire fusionne les séries multispectrales Sentinel-2 avec la température, les précipitations et la saisonnalité, puis transforme les signaux spatio-temporels en variables exploitables par les modèles.",
    contribution:
      "Projet réalisé en équipe avec Iliass Ouchida, sous l’encadrement d’Ichrak Benamri. Ma contribution a porté sur la conception et l’implémentation du pipeline Machine Learning de bout en bout.",
    categories: ["AI / ML", "Data Engineering"],
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "HDF5",
      "Matplotlib",
    ],
    pipeline: [
      "Ingestion",
      "Preprocessing",
      "Feature engineering",
      "Modeling",
      "Inference",
    ],
    highlights: [
      "~30 Go de données HDF5 traitées",
      "NDVI et agrégation temporelle",
      "Jointures spatio-temporelles par FIPS",
      "Simulation de scénarios agronomiques",
      "Interface Web pour utilisateurs non techniques",
    ],
    results: [
      "Meilleur modèle : Random Forest.",
      "R² ≈ 0,46.",
      "MAE ≈ 12,5, soit environ 6 % d’erreur relative.",
      "Cohérence agronomique validée sur des scénarios idéal, normal et sécheresse.",
    ],
    learnings: [
      "Extraction sélective dans des données HDF5 volumineuses",
      "Contrôles d’intégrité et gestion de fichiers corrompus",
      "Fusion de données satellitaires et climatiques",
      "Optimisation de Random Forest avec GridSearchCV",
    ],
  },
  {
    slug: "distributed-weather",
    title: "Simulation météorologique distribuée",
    domain: "Parallel Computing",
    summary:
      "Exploration du calcul parallèle CPU/GPU appliqué à des données météorologiques.",
    overview:
      "Architecture distribuée et visualisation pour comprendre les compromis de calcul.",
    ...common,
    solution:
      "Décomposition du traitement et exécution parallèle sur CPU et GPU.",
    categories: ["Distributed Systems"],
    technologies: ["GPU", "Calcul parallèle", "Systèmes distribués"],
  },
  ...[
    "paraImg",
    "distributed_sort",
    "MapReduce / MPI / Spark",
    "traffic-analysis-system",
    "Cyber-Sentinel",
  ].map(
    (title, i): Project => ({
      slug: [
        "paraimg",
        "distributed-sort",
        "mapreduce-mpi-spark",
        "traffic-analysis-system",
        "cyber-sentinel",
      ][i],
      title,
      domain: "Engineering Lab",
      summary:
        "Expérimentation d’ingénierie — documentation détaillée à compléter.",
      overview:
        "Une fiche laboratoire conçue pour recevoir architecture, contexte et résultats vérifiés.",
      challenge: "TODO — préciser le problème technique.",
      solution: "TODO — documenter l’approche.",
      contribution: "TODO — préciser la contribution.",
      categories: [i === 4 ? "Cybersecurity" : "Distributed Systems"],
      technologies: [],
      lab: true,
      results: ["TODO — résultat vérifié à ajouter."],
    }),
  ),
];
export const featuredProjects = projects.filter((p) => p.featured);
export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
