const mongoose = require('mongoose');

const PharmacieSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  adresse: { type: String, required: true },
  contact: { type: String },
  email: { type: String, required: true, unique: true },
  mot_de_passe: { type: String, required: true },
  localisation: {
    type: { type: String, enum: ['Point'], required: true },
    coordinates: { type: [Number], required: true } // [longitude, latitude]
  },
  medicaments: [
    {
      nom: { type: String, required: true },
      quantite: { type: Number, default: 0 }
    }
  ]
});


PharmacieSchema.index({ localisation: '2dsphere' });


const Pharmacie = mongoose.model("Pharmacie", PharmacieSchema);

module.exports = Pharmacie;