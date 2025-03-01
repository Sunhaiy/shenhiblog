const express = require('express');
const pinglunrouter =express.Router();
const connection =require('../sql');
pinglunrouter.get('/pinglun/:id',(req,res)=>{
    const querysql =`SELECT * FROM comments WHERE pagesid = ${req.params.id}`
    connection.query(querysql,(err,results)=>{
        if (err) {
            console.log(err);
        }else{
            res.json(results);
        }
    })
})