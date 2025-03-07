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
    const name = req.body.name;
    const link = req.body.link;
    const imageLink = req.body.imageLink;
    const description = req.body.description;
    const quersql =`INSERT INTO link (mingcheng,weburl,jianjie,linkicon) VALUES ('${name}','${link}','${description}','${imageLink}')`
})
module.exports = xiaochuanrouter;