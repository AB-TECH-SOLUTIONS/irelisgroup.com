# Irelis – MVP v2

> **Plateforme d’emploi et de carrière pour le Cameroun et l’Afrique centrale**

Ce dépôt contient la **version statique (MVP)** du site Irelis, entièrement développée en HTML, CSS et JavaScript.  
Il s’agit d’une maquette interactive fidèle à la vision de la fondatrice, prête à être présentée à des partenaires, investisseurs ou utilisateurs-testeurs.

---

## 🌟 Fonctionnalités

- ✅ Page d’accueil avec **moteur de recherche avancé** et filtres
- ✅ **Liste d’offres** + **panneau de détail dynamique** (sélection interactive)
- ✅ Badges professionnels : `Nouveau`, `Urgent`, `À distance`
- ✅ Pages complètes :
  - Accompagnement
  - Formations
  - Blog / Conseils carrière
  - Espace recruteur
  - Publier une offre
  - Connexion & Inscription
  - CV, Tarifs, Solutions RH
  - Mentions légales, CGU, Politique de confidentialité
- ✅ **Footer fonctionnel** avec liens vers les bonnes pages
- ✅ Boutons **WhatsApp** et **Telegram** intégrés
- ✅ Icônes SVG (pas d’émojis) → design professionnel
- ✅ Responsive mobile & desktop
- ✅ Simulations d’interactions (postuler, créer une alerte, publier une offre)

---

## 📁 Structure du projet

irelis-mvp-v2/
├── index.html # Page d'accueil (recherche + offres)
├── login.html # Connexion
├── register.html # Inscription
├── recruteurs.html # Présentation espace recruteur
├── publish-offer.html # Formulaire de publication d'offre
├── accompagnement.html # Service d'accompagnement carrière
├── formation.html # Catalogue de formations
├── blog.html # Articles & conseils
├── cv.html # Création de CV (à venir)
├── espace-recruteur.html # Dashboard recruteur (simulé)
├── tarifs.html # Grille tarifaire
├── solutions-rh.html # Services RH
├── mentions-legales.html # Mentions légales
├── politique-confidentialite.html # Politique de confidentialité
├── cgu.html # Conditions générales d'utilisation
├── dashboard.html # Tableau de bord administrateur
├── style.css # Feuille de style globale
├── script.js # Interactions & comportements
└── assets/
├── logo-irelis.png # Logo principal (à remplacer par le vrai PNG)
└── logo-irelis-white.png # Logo pour le footer (fond sombre)


---

## ▶️ Comment tester localement

### Option 1 : Double-cliquer sur `index.html`
> Fonctionne, mais certaines fonctionnalités (comme les chemins relatifs) peuvent être limitées.

### Option 2 : Utiliser un serveur local (recommandé)

1. Installez [Node.js](https://nodejs.org/)
2. Ouvrez un terminal dans le dossier `irelis-mvp-v2`
3. Exécutez :
   ```bash
   npx serve

	Déploiement
Ce site est conçu pour être déployé gratuitement via GitHub Pages :

Poussez ce dossier sur un dépôt GitHub
Allez dans Settings > Pages
Sélectionnez la branche main et le dossier racine /
Cliquez sur Save
Votre site sera accessible à :
https://votre-nom.github.io/irelis-mvp-v2/

	Prochaines étapes (Phase 2)
Intégration d’un backend (ex: Firebase, Node.js)
Stockage des offres et candidatures dans une base de données
Envoi réel d’emails (postulation, alertes)
Espace utilisateur avec CV en ligne et suivi de candidatures
Tableau de bord recruteur avec statistiques

Contact
Développé avec AGATHA NDO MBODE pour Irelis – Plateforme d’emploi camerounaise.
Pour toute question : contact@irelisgroup.com
