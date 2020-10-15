const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    res.send('hello world')
})

function middleware1(req,res,next) {
    next()
}

function middleware2(req,res) {
    res.send('hii')
}
app.get('/x',middleware1,middleware2)
app.listen(4444,()=>{
    console.log('server started on http://localhost:4444');
})