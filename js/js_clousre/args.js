function outter(args1) {
let y=20
let f=1

    function inner(args2) {
        let x=10
        let f=2
        console.log(arguments[0],f)
    console.log(args1,args2,x,y);    
    }
    return inner
}

let a=outter('parm1')
a('parm2')