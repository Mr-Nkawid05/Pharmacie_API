const express = require("express");
const mongoose = require("mongoose");
const Pharmacie = require("./models/pharmacie.js");
const app = express();


app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Pharmacie API server Updated!");
});


app.get("/api/pharmacies", async (req, res) => {
  try {
    const pharmacies = await Pharmacie.find();
    res.status(200).json(pharmacies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/pharmacie/:id", async (req, res) => {
  try {
    
  } catch (error) {
    res.status(500).json({ message: error.message }); 
  }
});

app.post("/api/pharmacie", async (req, res) => {
  try {
    const existe = await Pharmacie.findOne({ email: req.body.email });
    if (existe) {
      return res.status(400).json({ message: "Cet email est déjà utilisé." });
    }

    const pharmacie = await Pharmacie.create(req.body);
    res.status(201).json(pharmacie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(
    "mongodb+srv://wilfriednkawid_db_user:narpa6VRnbIXnIIC@backenddb.bwt34v6.mongodb.net/Pharmacie_API?appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
