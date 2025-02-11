const express =require('express')
const zhuye =require('./route/zhuye')
const liuyan =require('./route/liuyan')
const articles =require('./route/articles')
const xiaochuan =require('./route/xiaochuan')
const db =require('sql.js')
const app= express()
const port =2005;


db()
app.use(zhuye).use(liuyan).use(articles).use(xiaochuan)
app.get('/',(req,res)=>{
    res.end('haiy')
})
app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
})