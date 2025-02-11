const mysql = require('mysql2')

const connection = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'123123',
    database:'blog',
    port:3306
})
connection.connect((err)=>{
    if (err) {
        console.log('数据库连接失败')
    }else{
        console.log('数据库连接成功');
        
    }
    
})
module.exports = connection