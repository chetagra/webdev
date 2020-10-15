let inp=document.getElementById('inp')
let btnprint=document.getElementById('btnprint')
let list=document.getElementById('list')

btnprint.onclick=function () {
let start=Date.now()
let i=1
list.innerHTML=''
while(i<=inp.value){
   let li=document.createElement('li')
   let print=''
   if(i%3==0){
    print+='Fizz'
   }
   if(i%5==0){
    print+='Buzz'
   }
   if(print==='') {
           print=i
   }
   li.textContent=print
   list.appendChild(li)
   i++
}
console.log(Date.now()-start)    
}