const express =require('express');
const liuyanrouter = express.Router();
const connection = require('../sql');
liuyanrouter.get('/liuyan',(req,res)=>{
    connection.query('SELECT * FROM liuyan',(err,results)=>{
        if (err) {
            console.log(err);
        }else{
            res.json(results);
 
        }
    })
});
module.exports = liuyanrouter;