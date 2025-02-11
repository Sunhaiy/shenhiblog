const express =require('express');
const artrouter = express.Router();
artrouter.get('/articles',(req,res)=>{
    res.end('articles');
});
module.exports = artrouter;