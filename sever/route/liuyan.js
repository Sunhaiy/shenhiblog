const express =require('express');
const liuyanrouter = express.Router();
liuyanrouter.get('/liuyan',(req,res)=>{
    res.end('liuyan');
});
module.exports = liuyanrouter;