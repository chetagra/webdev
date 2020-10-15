const express=require('express')
const app=express()
app.use(express.urlencoded({extended : true}))
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

app.post('/greet',(req,res)=>{
    let person='guest'
   
    if(req.body.person){
        person=req.body.person
    }
    res.send('good morning '+person)
  })

app.listen(3334,()=>{
    console.log('started on server http://localhost:3334');
})

