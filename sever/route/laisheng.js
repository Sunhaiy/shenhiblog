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
laishengrouter.get('laisheng/admin',()=>{
    const quersql = 'SELECT * FROM laisheng'
    connection.query(quersql,()=>{
        if (err) {
            console.log(err);
        }else{
            res.json(results);
        }
    })
})
laishengrouter.post('/laisheng/admin',(req,res)=>{
    const quersql = 'INSERT INTO laisheng SET ?'
    connection.query(quersql,req.body,(err,results)=>{
        if (err) {
            console.log(err);
        }else{
            res.json({code:1,msg:'添加成功'});
        }
    })
})
module.exports = laishengrouter;