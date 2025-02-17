# Utilisation d'une image Alpine légère
FROM node:18-alpine AS builder

# Définition du répertoire de travail
WORKDIR /app

# Copie uniquement les fichiers nécessaires pour l'installation des dépendances
COPY front/package*.json ./

# Installation des dépendances en mode production
RUN npm ci --omit=dev

# Copie du code source
COPY ./front .

# Construction de l'application
RUN npm run build

# ---- Étape finale pour une image plus légère ----
FROM node:18-alpine AS runner

WORKDIR /app

# Copie uniquement le dossier de build depuis l'étape précédente
COPY --from=builder /app/dist ./dist

# Installation de `serve` uniquement pour l'exécution (si nécessaire)
RUN npm i -g serve

# Exposition du port 3000
EXPOSE 3000

# Démarrage du serveur
CMD ["serve", "-s", "dist"]