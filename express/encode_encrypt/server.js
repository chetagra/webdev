const express = require('express')

const app = express()

app.use('/', express.static(__dirname + '/public'))

function decryptQueryParams(req, res ,next) {

    for (let q in req.query) {
        if (req.query[q]==req.query[q].toUpperCase()){
              newData=req.query[q].toLowerCase()
        }
        else{
          newData=req.query[q].toUpperCase() 
        }
        req.query[q]=newData
     }
    next()
}

function decodeQueryBase64(req, res, next) {
    for (let q in req.query) {
        let data = req.query[q] 
        data = new Buffer(data, 'base64').toString('ascii')
        req.query[q] = data
    }
    next()
}

app.get('/eval',decodeQueryBase64,(req, res) => {
     
    res.send(data)
})

app.listen(4545, () => {
    console.log('server started on http://localhost:4545')
})