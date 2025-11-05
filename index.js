const express = require("express");
const mongoose = require("mongoose");
const Pharmacie = require("./models/pharmacie.js");
const app = express();


app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Pharmacie API server Updated!");
});

app.post("/api/pharmacie", async (req, res) => {
  try {
      const pharmacie = await Pharmacie.create();
      res.status(200).json(Pharmacie);
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
