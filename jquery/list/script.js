$(()=>{
 
    let text=$('#text')
    let list=$('#list')
     $('#prepend').click(()=>{
         let item=text.val()
         list.prepend($('<li>').text(item))
     })
     $('#append').click(()=>{
        let item=text.val()
       list.append($('<li>').text(item))
    })
})