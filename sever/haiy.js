const express =require('express')
const app= express()
const port =2005;

app.get('/',(req,res)=>{
    res.end('haiy')
})
app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
})