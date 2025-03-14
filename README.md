# React Frontend BienVu App

## Description du projet
Ce projet est une application frontend construite avec React et Tailwind CSS. Il est conçu pour offrir une interface utilisateur moderne, rapide et réactive. Ce projet est compatible avec les API REST et peut être facilement intégré à n'importe quel backend.

## Installation

### Prérequis
Avant d'installer le projet, assurez-vous d'avoir les éléments suivants installés sur votre machine :
- Node.js (>= 16.x)
- npm (ou yarn)

### Étapes d'installation

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/Ecole-de-Turing/BienVu-front.git
   cd BienVu-front
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```
   ou avec Yarn :
   ```bash
   yarn install
   ```

3. **Lancer l'application en mode développement**
   ```bash
   npm run dev
   ```
   ou avec Yarn :
   ```bash
   yarn dev
   ```
   L'application sera accessible sur `http://localhost:5173`

## Configuration de Tailwind CSS
Tailwind CSS est déjà configuré dans le projet. Si besoin, voici comment l'installer manuellement :
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
Ensuite, ajoutez la configuration suivante dans `tailwind.config.js` :
```javascript
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```
Et ajoutez Tailwind dans `src/index.css` :
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Structure du projet
```
├── src/
│   ├── assets/          # Fichiers statiques (images, icônes...)
│   ├── views/           # Composants réutilisables
│   ├── pages/           # Pages principales de l'application
│   ├── routes/          # Configuration des routes
│   ├── hooks/           # Hooks personnalisés
│   ├── interface/       # Types typescript
│   ├── services/        # Gestion des appels API
│   ├── styles/          # Fichiers CSS globaux
│   ├── App.jsx          # Point d'entrée de l'application
│   ├── main.jsx         # Initialisation de React
│   └── index.css        # Styles globaux avec Tailwind
├── public/              # Fichiers statiques accessibles publiquement
├── package.json         # Dépendances et scripts
├── tailwind.config.js   # Configuration de Tailwind CSS
└── vite.config.js       # Configuration de Vite
```

## Contributeurs

- **Paul Banchon** - [GitHub](https://github.com/P0B0CK)
- **Yannis Duvignau** - [GitHub](https://github.com/yannisduvignau)

