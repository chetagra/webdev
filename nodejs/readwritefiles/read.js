const fs=require('fs')

fs.readFile('helloworld.txt',function (err,data) {
      if (err) throw err
      console.log(data.toString())
})