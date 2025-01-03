FROM node:18

WORKDIR /usr/src/app

# Copier uniquement les fichiers nécessaires
COPY package*.json ./

# Installer les dépendances avec npm ci
RUN npm ci --production && npm cache clean --force

# Copier tout le code source, en excluant les fichiers inutiles grâce à .dockerignore
COPY . .

# Définir des variables d'environnement
ENV NODE_ENV=production

# Exposer le port
EXPOSE 3000

# Ajouter un utilisateur non-root pour exécuter l'application
RUN useradd -m appuser
USER appuser

# Démarrer l'application
CMD ["node", "server.js"]