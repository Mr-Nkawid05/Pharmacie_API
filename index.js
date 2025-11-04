const express = require('express');
const mongoose = require('mongoose');
const app = express();




app.get('/', (req, res) => {
  res.send("Welcome to the Pharmacie API server Updated!");
});


mongoose.connect("mongodb+srv://wilfriednkawid_db_user:narpa6VRnbIXnIIC@backenddb.bwt34v6.mongodb.net/Pharmacie_API?appName=BackendDB")
  .then(() => {console.log("Connected to database!");
    app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
  })
  .catch(() => {
    console.log("Connection failed!");
  });