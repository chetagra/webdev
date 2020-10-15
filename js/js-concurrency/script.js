//normal execution

// function hellosayer (name , time) {
// let count=0
// let loopid=setInterval(() => {
//     count++
//     console.log(name)
//     if(count==time){
//         clearInterval(loopid)
//     }
// }, 1000);    
// }


//using callback

// function hellosayer (name , time,callback) {
//     let count=0
//     let loopid=setInterval(() => {
//         count++
//         console.log(name)
//         if(count==time){
//             clearInterval(loopid)
//             callback()
//         }
//     }, 1000);    
//     }
// hellosayer('chetan',2,()=>{
//     hellosayer('Riyanshi',2,()=>{})
// })

// using promises

// function hellosayer (name , time,callback) {
//     return new Promise((resolve,reject)=>{
//         let count=0
//         let loopid=setInterval(() => {
//             count++
//             console.log(name)
//             if(count==time){
//                 clearInterval(loopid)
//                resolve()
//             }
//         }, 1000)})
//     }    
    
    // hellosayer('chetan',2)
    // .then(hellosayer('Riyanshi',2))
    // .then(hellosayer('Kuldeep',2))

  

    // hellosayer('chetan',2)
    // .then(()=>hellosayer('Riyanshi',2))
    // .then(()=>hellosayer('Kuldeep',2))


//using async await

// function hellosayer (name , time,callback) {
//     return new Promise((resolve,reject)=>{
//         let count=0
//         let loopid=setInterval(() => {
//             count++
//             console.log(name)
//             if(count==time){
//                 clearInterval(loopid)
//                resolve()
//             }
//         }, 1000)})
//     }    


// async function task() {
//     await hellosayer('chetan',2)
//     await hellosayer('Riyanshi',2)
//     await hellosayer('Kuldeep',2)
// }
// task()


//using promise.all

function hellosayer (name , time,callback) {
    return new Promise((resolve,reject)=>{
        let count=0
        let loopid=setInterval(() => {
            count++
            console.log(name)
            if(count==time){
                clearInterval(loopid)
               resolve()
            }
        }, 1000)})
    }    


async function task() {
    await Promise.all([
    hellosayer('chetan',2),
    hellosayer('Riyanshi',2),
    hellosayer('Kuldeep',2)
    ])
     console.log('+++++++++')
    await Promise.all([
        hellosayer('yuvraj',2),
        hellosayer('chaitali',2),
        hellosayer('deepak',2)
        ])
}
task()

