const express=require('express')
const app=express()
let tasks=[

]
app.use(express.urlencoded({extended:true}))
app.set('view engine','hbs')
app.get('/',(req,res)=>{
     res.render('home',{
         tasks
     })
})
app.post('/',(req,res)=>{
   tasks.push(req.body.task)
   res.redirect('/')
})
app.listen(5555,()=>{
    console.log('server started on http://localhost:5555');
})