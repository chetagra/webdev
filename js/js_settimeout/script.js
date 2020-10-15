let btnwait=document.getElementById('btnwait')
let inpnum=document.getElementById('inpnum')
let btncancel=document.getElementById('btncancel')
//callback

// let loopid
// let wait=function (timeout,done) {
//     if(isNaN(parseInt(timeout))){
//            return new Error('Timeout should be a number');

//     }
//  loopid=setTimeout(()=>{done(null)},timeout)
    
// }

// btnwait.onclick=function () {
//     wait(inpnum.value,(err)=>{
//         if (err) console.error(err)
//         else console.log('wait over')
//     })    
// }

// btncancel.onclick=function() {
//        clearTimeout(loopid)  
//        console.log('timeout over');
// }

//promise

let loopid
let wait=function (timeout) {
    return new Promise((resolve,reject)=>{
   if(isNaN(parseInt(timeout))){
        reject('Timeout should be a number');
     }
       loopid=setTimeout(resolve,timeout)
    })
    
}

btnwait.onclick=function () {
  wait(inpnum.value).then(()=>{
   console.log('wait over');
  })
  .catch((e)=>{
      console.error(e)
  })
}

btncancel.onclick=function() {
       clearTimeout(loopid)  
       console.log('timeout over');
}