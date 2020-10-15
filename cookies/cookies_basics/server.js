const express = require('express')
const expressSession= require('express-session')
const app = express()

app.set('view engine','hbs')

app.use(expressSession({
    resave:true,
    saveUninitialized:true,
    secret:'some long random string'
}))

app.get('/',(req,res)=>{
    console.log(req.session)

    if (!req.session.visits) {
        req.session.visits =1
    } else {
        req.session.visits++
    }
    res.render('index',{count: +(req.session.visits)})
})

app.listen(9876,()=>{
    console.log('started on http://localhost:9876')
})