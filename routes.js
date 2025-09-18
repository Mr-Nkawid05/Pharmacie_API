const express = require('express');

const router = express.Router();



router.get('/Pharmacie',(req,res)=>{
    res.json({message: "List of all Pharmacies"});
});

router.post('/todo',(req,res)=>{
    
});

router.get('/todo/:id',(req,res)=>{
    
});

router.put('/todo/:id',(req,res)=>{
    
});

router.delete('/todo/:id',(req,res)=>{
    
});

module.exports = router;