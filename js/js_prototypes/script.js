let str="asdf"
let num=22;
let bool=true;
let arr=[2,3,4]
let obj={
    a:1,
    b:2
}
let fun=function() {
 console.log(hi)   
}
console.log('========types=======')
console.log(typeof str)
console.log(typeof num)
console.log(typeof bool)
console.log(typeof arr)
console.log(typeof obj)
console.log(typeof fun)

Array.prototype.joinOrignal=Array.prototype.join;
Array.prototype.join=function() {
    console.log("join called on",this)
    return this.joinOrignal(...arguments)
}