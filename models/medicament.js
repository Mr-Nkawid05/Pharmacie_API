// models/Medicament.js
const mongoose = require('mongoose');

const MedicamentSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  description: { type: String },
  dosage: { type: String },
  forme: { type: String }
});

module.exports = mongoose.model('Medicament', MedicamentSchema);

