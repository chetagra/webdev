const express=require('express')
const app=express()

app.get('/',(req,res)=>{
        res.send('hello world')
})

app.get('/x',(req,res)=>{
    let person='Guest'
     if(req.query.person){
       person=req.query.person
     }
     res.send('good morning '+person)
})

app.listen(5555,()=>{
    console.log('server started on http://localhost:5555');
})