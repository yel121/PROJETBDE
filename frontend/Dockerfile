# Étape 1 : Utiliser une image Node.js pour construire le projet
FROM node:20 AS build

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tous les fichiers du projet dans le conteneur
COPY . .

# Construire l'application React avec Vite
RUN npm run build

# Étape 2 : Utiliser une image Nginx pour servir le frontend
FROM nginx:stable-alpine

# Copier les fichiers de build dans le dossier par défaut de Nginx
#COPY --from=build /app/dist /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Lancer Nginx
CMD ["nginx", "-g", "daemon off;"]
