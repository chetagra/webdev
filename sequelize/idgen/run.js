const {db}=require('./connect')
const {app}=require('./server')


const start=async()=>{
    try {
      await db.sync()
      app.listen(3132,()=>{
          console.log('server started on http://localhost:3132');
      })
    }
    catch(e){
        console.error(e);
    }
}
start()