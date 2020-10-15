let inptask=$('#inptask')
let btnadd =$('#btnadd')
let btnreset=$('#btnreset')
let ullist=$('#ullist')
let btnclean=$('#btnclean')
let btnsort=$('#btnsort')
function additem() {
    let listitem=$('<li>',{
        'class':'list-group-item',
         text:inptask.val()
    })
    listitem.click(()=>{
      listitem.toggleClass('done')
    })
    ullist.append(listitem)
    inptask.val('')
    togglebtn()
}
function cleardone() {
  $('#ullist .done').remove()
  togglebtn()
}
btnadd.click(additem)

function sort() {
  $('#ullist .done').appendTo('#ullist')
  togglebtn()
}

function togglebtn() {
  btnadd.prop('disabled',inptask.val()=='')
  btnreset.prop('disabled',inptask.val()=='')
  btnclean.prop('disabled',ullist.children().length<1)
  btnsort.prop('disabled',ullist.children().length<1)
}

inptask.on('input',togglebtn)

btnsort.click(sort)
inptask.keypress((e)=>{
  if(e.which==13){
      additem()
  }
})

btnreset.click(()=>{
    inptask.val('')
    togglebtn()
})

btnclean.click(cleardone)