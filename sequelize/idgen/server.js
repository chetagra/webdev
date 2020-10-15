const express=require('express')
const path=require('path')
const hbs=require('hbs')
const {center,season,course,batch}=require('./connect')
const app=express()

app.set('view engine','hbs')
app.set('views',path.resolve(__dirname,'./views'))

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get('/batchcode',async (req,res)=>{
   try {
      const centers=await center.findAll()
      const seasons= await season.findAll()
      const courses= await course.findAll()
      const years =[2016,2017,2018,2019,2020,2021]
      res.render('batchcode',{
         centers,seasons,courses,years
      })
   } catch (e) {
      console.error(e);
   }
})


   app.post('/batchcode',async (req,res)=>{
      let batchcode=''
      batchcode+=req.body.course
      batchcode+=req.body.center
      batchcode+=req.body.year.substr(2)
      batchcode+=req.body.season
      batchcode+=req.body.batchno
        
      try {
       const batch = await batch.create({
            code:batchcode,
            year:req.body.year,
            courseId:req.body.course,
            centerId:req.body.center,
            seasonId:req.body.season,
            date:Date.parse(req.body.start),
            end:Date.parse(req.body.end)
         })
         res.send(Batch.code)
      } catch (e) {
         console.error(e);
      }
     
   })

   app.get('/batches',async (req,res)=>{
      try {
         const batches= await batch.findAll({
            include:[course,season,center]
      })
      batches.forEach(b=>console.log(JSON.stringify(b)));
         res.render('batches',{batches})
      } catch (error) {
         console.error(error);
      }
   })

module.exports={
   app
}
