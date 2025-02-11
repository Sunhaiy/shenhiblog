const express =require('express');
const router = express.Router();
router.get('/zhuye',(req,res)=>{
    res.end('zhuye123');
});
module.exports = router;