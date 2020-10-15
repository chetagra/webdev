let task=document.getElementById('task')
let add=document.getElementById('add')
let list=document.getElementById('list')

add.onclick=()=>{
    let li=document.createElement('li')
    let taskspan=document.createElement('span')
    let btndel=document.createElement('button')
    let btnup=document.createElement('button')
    let btndown=document.createElement('button')

    btndel.onclick=(event)=>{
        event.target.parentElement.remove()
    }
    btnup.onclick=(event)=>{
        event.target.parentElement.parentElement.insertBefore(event.target.parentElement,event.target.parentElement.previousElementSibling)
    }
    btndown.onclick=(event)=>{
        event.target.parentElement.parentElement.insertBefore(event.target.parentElement.nextElementSibling,event.target.parentElement)
    }
    taskspan.innerText=task.value
    btndel.innerText='✖'
    btnup.innerText='⬆'
    btndown.innerText='⬇'

    li.appendChild(btnup)
    li.appendChild(btndown)
    li.appendChild(btndel)
    li.appendChild(taskspan)

    list.appendChild(li)
}
