const express =require('express');
const router = express.Router();
const connection =require('../sql')
router.get('/zhuye',(req,res)=>{
    res.end('zhuye123');
});
router.post('/zhuye/admin',(req,res)=>{
    res.end('zhuye123');
})
router.get('/zhuye/admin',(req,res)=>{
    const querysql = `
    SELECT 'articles' AS table_name, COUNT(*) AS count FROM articles
    UNION ALL
    SELECT 'liuyan' AS table_name, COUNT(*) AS count FROM liuyan
    UNION ALL
    SELECT 'link' AS table_name, COUNT(*) AS count FROM link`;
    
    connection.query(querysql,(err,results)=>{
        if (err) {
            console.log(err);
        }else{
            console.log(results);
            
            res.json(results);
        }
    })
})
module.exports = router;