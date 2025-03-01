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
artrouter.get('/articles/:id',(req,res)=>{
    const querysql =`SELECT * FROM articles WHERE id = ${req.params.id}`
    connection.query(querysql,(err,results)=>{
        if (err) {
            console.log(err);
        }else{
            res.json(results);
        }
    })
});


module.exports = artrouter;