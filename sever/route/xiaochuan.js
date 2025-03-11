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
xiaochuanrouter.post('/xiaochuan/postlink',(req,res)=>{
    console.log(req.body);
    const {name,link,icon,intronduce} = req.body;
    const insertsql =`INSERT INTO link (mingcheng,weburl,jianjie,linkicon) VALUES ('${name}','${link}','${icon}','${intronduce}')`
    connection.query(insertsql,(err,results)=>{
        if (err) {
            console.log(err);
        }else{
            res.json({code:1,msg:'添加成功'});
        }
    })
})
xiaochuanrouter.post('/xiaochuan/admin',(req,res)=>{
    const sql = `DELETE FROM link WHERE id = ${req.body.id}`
    connection.query(sql,(err,results)=>{
        if (err) {
            console.log(err);
        }else{
            res.json({code:1,msg:'删除成功'});
        }
    })
})
module.exports = xiaochuanrouter;