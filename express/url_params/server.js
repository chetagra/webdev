const express=require('express')
const app=express()

app.get('/',(req,res)=>{
   res.send('hello guys')
})

app.get('/:name/:city',(req,res)=>{
    res.send('welcome '+req.params.name+' to '+req.params.city)
})

app.listen(7777,()=>{
    console.log('started on http://localhost:7777');
})

