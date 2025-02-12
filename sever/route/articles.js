const express =require('express');
const artrouter = express.Router();
const connection = require('../sql');
artrouter.get('/articles',(req,res)=>{
    const querysql ='SELECT * FROM articles ORDER BY created_at DESC LIMIT 12'
    connection.query(querysql,(err,results)=>{
        if (err) {
            console.log(err);
        }
        console.log(results);
        console.log(req.ip);
        res.json(results);
    })



    
    

});



module.exports = artrouter;