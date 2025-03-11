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
liuyanrouter.post('/liuyan',(req,res)=>{
    let {name,email,content} = req.body;
    let querysql = `INSERT INTO liuyan(name,email,content) VALUES('${name}','${email}','${content}')`;
    connection.query(querysql,(err,results)=>{
        if (err) {
            console.log(err);
        }else{}
    })
})
liuyanrouter.get('/liuyan/admin',(req,res)=>{
    const quersql = 'SELECT * FROM liuyan'
    connection.query(quersql,(err,results)=>{
        if (err) {
            console.log(err);
        }else{
            res.json(results);
        }
    })
})
liuyanrouter.post('/liuyan/admin',(req,res)=>{
    let {id} = req.body;
    let querysql = `DELETE FROM liuyan WHERE id = ${id}`;
    connection.query(querysql,(err,results)=>{
        if (err) {
            console.log(err);
        }else{
            res.json(results);
        }
    })
})
module.exports = liuyanrouter;