const express = require('express')
const cors = require('cors') // 引入cors中间件
const zhuye = require('./route/zhuye')
const liuyan = require('./route/liuyan')
const articles = require('./route/articles')
const xiaochuan = require('./route/xiaochuan')
const db = require('./sql.js')
const app = express()
const port = 2005;

db.connect()
app.use(cors()) // 使用cors中间件
app.use(zhuye).use(liuyan).use(articles).use(xiaochuan)
app.get('/', (req, res) => {
    res.end('haiy')
})
app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`)
})