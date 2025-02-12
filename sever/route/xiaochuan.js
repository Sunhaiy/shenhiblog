const express =require('express');
const xiaochuanrouter = express.Router();
const connection = require('../sql');
xiaochuanrouter.get('/xiaochuan',(req,res)=>{
    const quersql ='SELECT * FROM link'
    connection.query(quersql,(err,results)=>{
        if (err) {
            console.log(err);
            
        }else{
            res.json(results);
        }
    })
});
module.exports = xiaochuanrouter;