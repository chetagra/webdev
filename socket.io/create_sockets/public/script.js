let socket = io()

let boombtn = document.getElementById('boom')

boombtn.onclick = ()=>{
 socket.emit('boom')
}

socket.on('whizz',()=>{
    let div = document.createElement('div')
    div.innerText='whizz'
    document.body.appendChild(div)
})
