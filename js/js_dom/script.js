let inp=document.getElementById('inp')
let print=document.getElementById('print')
let list=document.getElementById('list')

// print.onclick=()=>{
// let n=parseInt(inp.value)
// let listhtml=''
// for (let i = 0; i <=n ; i++) {
//   listhtml+='<li>'+i+'</li>'
// }
// list.innerHTML=listhtml
// }

print.onclick=()=>{
    let n=parseInt(inp.value)
    for (let i = 0; i <=n ; i++) {
       let item=document.createElement('li')
       item.innerText=i
       list.appendChild(item) 
    }
}
    