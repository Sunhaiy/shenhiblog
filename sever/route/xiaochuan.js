const express =require('express');
const xiaochuanrouter = express.Router();
xiaochuanrouter.get('/xiaochuan',(req,res)=>{
    res.end('xiaochuan');
});
module.exports = xiaochuanrouter;