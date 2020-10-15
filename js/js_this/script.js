let obj={
    a:10,
    b:20,
    c:"chetan",
    d:function () {
        console.log(this)
    },
    e:{
        f:function () {
            console.log(this)
        }
    }
}

function hi() {
    console.log(this)
}

