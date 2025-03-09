const express = require('express');
const pinglunrouter =express.Router();
const connection =require('../sql');
pinglunrouter.get('/pinglun/:id',(req,res)=>{
    const querysql =`SELECT * FROM comments WHERE pagesid = ${req.params.id}`
    connection.query(querysql,(err,results)=>{
        if (err) {
            console.log(err);
        }else{
            console.log(req.params.id);
            
            res.json(results);
        }
    })
})
pinglunrouter.post('/pinglun',(req,res)=>{
    const querysql =`INSERT INTO comments (username,contents,pagesid) values ('${req.body.name}','${req.body.content}','${req.body.artid}')`

    connection.query(querysql,(err,results)=>{
        if (err) {

            
            console.log(err);
        }else{
            res.json({code:1,msg:'评论成功'});
            console.log(req.body);
            
        }
    })

}
)
module.exports = pinglunrouter;