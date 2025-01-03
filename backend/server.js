const express = require('express');
const app = express();
const PORT = 3000;
const pool = require('./config/database');
// Middleware pour traiter les données JSON
app.use(express.json());
// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});