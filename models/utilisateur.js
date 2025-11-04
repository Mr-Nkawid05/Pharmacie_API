// models/Utilisateur.js
const mongoose = require('mongoose');

const UtilisateurSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mot_de_passe: { type: String, required: true }
});

module.exports = mongoose.model('Utilisateur', UtilisateurSchema);
