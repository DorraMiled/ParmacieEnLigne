# ePharmaApplication

Application développée avec la stack MEAN (MongoDB, Express, Angular, Node.js).

## 📋 Description

Cette application Pharmacie en ligne offre une plateforme complète de gestion de pharmacie en ligne avec des fonctionnalités pour les clients et les administrateurs. Elle permet la gestion de produits, de catégories, de marques, de commandes et de profils utilisateurs.

## 🚀 Technologies Utilisées

### Backend
- **Node.js** - Environnement d'exécution JavaScript
- **Express.js** - Framework web pour Node.js
- **MongoDB** - Base de données NoSQL
- **Mongoose** - ODM pour MongoDB
- **JWT** (jsonwebtoken) - Authentification par tokens
- **Bcrypt** - Hachage des mots de passe
- **CORS** - Gestion des requêtes cross-origin

### Frontend
- **Angular 16** - Framework frontend
- **Angular Material** - Composants UI Material Design
- **TypeScript** - Langage de programmation typé
- **SCSS** - Préprocesseur CSS
- **RxJS** - Programmation réactive

## 📁 Structure du Projet

```
eCommerce/
├── backend/                    # API REST Node.js/Express
│   ├── db/                     # Modèles de données Mongoose
│   │   ├── user.js
│   │   ├── product.js
│   │   ├── category.js
│   │   ├── brand.js
│   │   ├── cart.js
│   │   ├── order.js
│   │   └── wishlist.js
│   ├── handlers/               # Logique métier
│   ├── middleware/             # Middlewares (auth, etc.)
│   ├── routes/                 # Routes API
│   ├── index.js                # Point d'entrée du serveur
│   └── package.json
│
└── webapp/                     # Application Angular
    ├── src/
    │   ├── app/
    │   │   ├── components/     # Composants Angular
    │   │   ├── services/       # Services (API, auth, etc.)
    │   │   ├── common/         # Types, guards, interceptors
    │   │   └── ...
    │   ├── assets/             # Ressources statiques
    │   └── environments/       # Configuration environnement
    ├── angular.json
    └── package.json
```

## 🎯 Fonctionnalités

### Pour les Clients
- ✅ Inscription et connexion des utilisateurs
- ✅ Navigation et recherche de produits
- ✅ Visualisation des détails des produits
- ✅ Ajout de produits au panier
- ✅ Liste de souhaits (wishlist)
- ✅ Passage de commandes
- ✅ Suivi des commandes
- ✅ Gestion du profil utilisateur

### Pour les Administrateurs
- ✅ Tableau de bord administrateur
- ✅ Gestion des produits (CRUD)
- ✅ Gestion des catégories (CRUD)
- ✅ Gestion des marques (CRUD)
- ✅ Gestion des commandes
- ✅ Authentification et autorisation basées sur les rôles

## 🔧 Installation

### Prérequis
- Node.js (v14 ou supérieur)
- MongoDB (v4.4 ou supérieur)
- npm ou yarn

### 🚀 Installation Rapide (après clonage GitHub)

**Option 1 : Script automatique (Windows)**
```powershell
# Exécuter le script d'installation
.\install.ps1
```

**Option 2 : Installation manuelle**
```bash
# 1. Cloner le repository
git clone <votre-url-github>
cd eCommerce

# 2. Installer les dépendances du backend
cd backend
npm install

# 3. Installer les dépendances du frontend
cd ../webapp
npm install

# 4. Retourner à la racine du projet
cd ..
```

**⚠️ IMPORTANT** : Les dossiers `node_modules` ne sont pas inclus dans le repository GitHub. Vous **DEVEZ** exécuter `npm install` dans les deux dossiers (backend et webapp) après avoir cloné le projet.

### Installation du Backend

```bash
# Naviguer vers le dossier backend
cd backend

# Installer les dépendances
npm install
```

### Installation du Frontend

```bash
# Naviguer vers le dossier webapp
cd webapp

# Installer les dépendances
npm install
```

## ⚙️ Configuration

### Configuration MongoDB

Assurez-vous que MongoDB est installé et en cours d'exécution sur votre machine.

Le backend se connecte par défaut à :
```
mongodb://127.0.0.1:27017/meanprojet2
```

Pour modifier la connexion, éditez le fichier [backend/index.js](backend/index.js#L38).

### Configuration de l'API

Le frontend est configuré pour se connecter au backend sur :
```
http://localhost:3000
```

Pour modifier l'URL de l'API, éditez les fichiers :
- [webapp/src/environments/environment.ts](webapp/src/environments/environment.ts) (développement)
- [webapp/src/environments/environment.development.ts](webapp/src/environments/environment.development.ts) (développement)

## 🚀 Lancement de l'Application

### Démarrer MongoDB

```bash
# Windows
mongod

# Linux/Mac
sudo systemctl start mongod
```

### Démarrer le Backend

```bash
cd backend
npm start
```

Le serveur backend démarrera sur `http://localhost:3000`

### Démarrer le Frontend

```bash
cd webapp
npm start
```

L'application Angular sera accessible sur `http://localhost:4200`

## 🔑 API Endpoints

### Authentification
- `POST /auth/register` - Inscription d'un nouvel utilisateur
- `POST /auth/login` - Connexion utilisateur

### Produits
- `GET /product` - Liste tous les produits
- `GET /product/:id` - Détails d'un produit
- `POST /product` - Créer un produit (Admin)
- `PUT /product/:id` - Modifier un produit (Admin)
- `DELETE /product/:id` - Supprimer un produit (Admin)

### Catégories
- `GET /category` - Liste toutes les catégories
- `POST /category` - Créer une catégorie (Admin)
- `PUT /category/:id` - Modifier une catégorie (Admin)
- `DELETE /category/:id` - Supprimer une catégorie (Admin)

### Marques
- `GET /brand` - Liste toutes les marques
- `POST /brand` - Créer une marque (Admin)
- `PUT /brand/:id` - Modifier une marque (Admin)
- `DELETE /brand/:id` - Supprimer une marque (Admin)

### Client
- `GET /customer/cart` - Obtenir le panier
- `POST /customer/cart` - Ajouter au panier
- `GET /customer/wishlist` - Obtenir la wishlist

### Commandes
- `GET /orders` - Liste des commandes
- `POST /orders` - Créer une commande
- `GET /orders/:id` - Détails d'une commande

## 🔒 Authentification

L'application utilise JWT (JSON Web Tokens) pour l'authentification :
- Les tokens sont générés lors de la connexion
- Les routes protégées nécessitent un token valide dans les en-têtes
- Le middleware `verifyToken` vérifie l'authenticité des tokens
- Le middleware `isAdmin` vérifie les permissions administrateur

## 📦 Dépendances Principales

### Backend
```json
{
  "express": "^4.21.1",
  "mongoose": "^8.8.4",
  "jsonwebtoken": "^9.0.2",
  "bcrypt": "^5.1.1",
  "cors": "^2.8.5"
}
```

### Frontend
```json
{
  "@angular/core": "^16.2.0",
  "@angular/material": "^16.2.14",
  "@angular/router": "^16.2.0",
  "rxjs": "~7.8.0"
}
```

## 🛡️ Sécurité

- Mots de passe hachés avec bcrypt
- Authentification JWT
- Protection CORS configurée
- Validation des entrées utilisateur
- Guards Angular pour les routes protégées

## 📝 Scripts Disponibles

### Backend
```bash
npm start        # Démarre le serveur avec nodemon (auto-reload)
npm test         # Lance les tests
```

### Frontend
```bash
npm start        # Démarre le serveur de développement
npm run build    # Compile l'application pour la production
npm test         # Lance les tests unitaires
npm run watch    # Compile en mode watch
```

## 👥 Auteurs

Projet développé dans le cadre d'un projet MEAN Stack.


---

**Note :** Assurez-vous que MongoDB est en cours d'exécution avant de démarrer l'application.
