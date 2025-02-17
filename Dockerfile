# Utilisation d'une image Alpine légère pour Node.js
FROM node:18-alpine AS base

# Définition du répertoire de travail
WORKDIR /app

# Copie uniquement les fichiers nécessaires pour l'installation des dépendances
COPY front/package*.json ./

# Installation des dépendances (y compris les dépendances de développement)
RUN npm install

# ---- Étape pour le développement ----
FROM base AS dev

# Copie du code source dans le conteneur
COPY ./front .

# Exposer le port sur lequel Vite sera exécuté (par défaut 5173)
EXPOSE 3000

# Lancer le serveur de développement Vite
CMD ["npm", "run", "dev"]

# ---- Étape pour la production ----
# FROM base AS prod

# # Copie du code source
# COPY ./front .

# # Construction de l'application (pour la production)
# RUN npm run build

# # Exposer le port 3000 pour servir l'application
# EXPOSE 3000

# # Installer `serve` pour servir le build dans un conteneur léger
# RUN npm install -g serve

# # Lancer le serveur de production avec `serve`
# CMD ["serve", "-s", "dist"]
