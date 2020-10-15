const express=require('express')
const app=express()

app.get('/',(req,res)=>{
   res.send('hello world')
})

app.get('/form',(req,res)=>{
    res.sendFile(__dirname+'/files/index.html')
})

app.get('/greet',(req,res)=>{
  let person='guest'
  if(req.query.person){
      person=req.query.person
  }
  res.send('good morning '+person)
})

app.listen(3335,()=>{
    console.log('started on server http://localhost:3335');
})