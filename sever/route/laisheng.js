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
            console.log(results);
            
            res.json(results);
        }
    })
})
laishengrouter.post('/laisheng/admin/:id',(req,res)=>{
    const quersql =`UPDATE laisheng SET title = ?,content = ?,weacher=? WHERE id = ${req.body.id}`
    connection.query(quersql,[req.body.title,req.body.content,req.body.weacher],(err,data)=>{
        if (err) {
            console.log(err);
            console.log(req.body);
            
        }else{
            console.log('修改成功');
            
            res.json({code:1,msg:'修改成功'});
        }
    })
    

    
    
})
laishengrouter.post('/laisheng/admin',(req,res)=>{
    const quersql = `INSERT INTO laisheng (title,content,weacher) VALUES (?,?,?)`
    connection.query(quersql,[req.body.title,req.body.content,req.body.weacher],(err,results)=>{
        if (err) {
            console.log(err);
            console.log('插入失败');
        }else{
            console.log('插入成功');
            
            res.json({code:1,msg:'添加成功'});
        }
    })
})
module.exports = laishengrouter;