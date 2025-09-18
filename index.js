const express = require('express');
const apiRoutes = require('./routes');
const {sequelize, connectDB} = require('./db');


const app = express();
const PORT = 3000;


app.use('/api',apiRoutes);

app.get('/',(req,res)=>{
    res.status(200).json({message: "Welcome to Pharmacie API"})
})

app.listen(PORT , async()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
    await connectDB();
})