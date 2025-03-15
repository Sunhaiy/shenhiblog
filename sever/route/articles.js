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
artrouter.get('/articles/admin',(req,res)=>{
    const quersql = 'SELECT * FROM articles'
    connection.query(quersql,(err,results)=>{
        if (err) {
            console.log(err);
        }else{
            res.json(results);
            console.log(results);
            
        }
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


artrouter.post('/articles/admin',(req,res)=>{
    const querysql =`INSERT INTO articles (title,content,created_at) values ('${req.body.title}','${req.body.content}','${req.body.time}')`
    connection.query(querysql,(err,results)=>{
        if (err) {
            console.log(err);
        }else{
            res.json({code:1,msg:'发表成功'});
        }
    })
})

artrouter.post('/articles/change',(req,res)=>{
    const querysql =`UPDATE articles SET title = '${req.body.title}',content = '${req.body.content}' WHERE id = ${req.body.id}`
    connection.query(querysql,(err,results)=>{
        if (err) {
            console.log(err);
        }else{
            res.json({code:1,msg:'修改成功'});
            console.log(req.body);
            
        }
    })
})
module.exports = artrouter;