const express =require('express');
const laishengrouter = express.Router();
const connection = require('../sql')
laishengrouter.get('/laisheng',(req,res)=>{
    connection.query('SELECT * FROM laisheng',(err,results)=>{
        if (err) {
            console.log(err);
        }else{
            res.json(results);
        }
    })
})
module.exports = laishengrouter;