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
laishengrouter.get('/laisheng/admin',(req,res)=>{
    const quersql = 'SELECT * FROM laisheng'
    connection.query(quersql,(err,results)=>{
        if (err) {
            console.log(err);
        }else{
            res.json(results);
        }
    })
})
laishengrouter.get('/laisheng/admin/:id',(req,res)=>{
    const quersql = 'SELECT * FROM laisheng WHERE id = ?'
    connection.query(quersql,req.params.id,(err,results)=>{
        if (err) {
            console.log(err);
            console.log(req.params.id,'err');
            
        }else{
            console.log(req.params.id);
            
            res.json(results);
        }
    })
})
laishengrouter.post('/laisheng/admin/:id',(req,res)=>{
    const quersql = 'UPDATE laisheng SET  WHERE id = ?'
    connection.query(quersql,(err,results)=>{
        if (err) {
            console.log(err);
            console.log('nonono');
            
        }else{
            res.json({code:1,msg:'修改成功'});
            console.log('ok');
            
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