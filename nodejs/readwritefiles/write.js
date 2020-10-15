const lib=require('fs')

lib.writeFile(__dirname+'/helloworld.txt','hello world',function (err) {
    if(err) throw err
     console.log('sucessfully created file');    
})