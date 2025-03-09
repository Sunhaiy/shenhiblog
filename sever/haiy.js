const express = require('express')
const cors = require('cors') 
const zhuye = require('./route/zhuye')
const liuyan = require('./route/liuyan')
const articles = require('./route/articles')
const xiaochuan = require('./route/xiaochuan')
const laisheng = require('./route/laisheng')
const pinglunrouter = require('./route/pinglun.js')
const db = require('./sql.js')
const app = express()
const port = 2005;

db.connect()
app.use(cors()).use(express.json()).use(express.urlencoded({ extended: true }))
app.use(zhuye).use(liuyan).use(articles).use(xiaochuan).use(laisheng).use(pinglunrouter)
app.get('/', (req, res) => {
    res.end('haiy')
})
app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`)
})