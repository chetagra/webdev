let x=10
console.log(x)

let a=function () {
    return 1;
}
console.log(a)
console.log(a())

function area(heigth,width) {
    if(!width){
        return 2*3.14*heigth*heigth
    }
    else{
        return heigth*width;
    }
}
console.log(area(3,4))
console.log(area(4))