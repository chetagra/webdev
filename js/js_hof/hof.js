function creategreet(greeting) {
    function greet(name) {
        console.log(greeting+name)
    }
    return greet;
}
function getname() {
    return  document.getElementById('namebox').value
}
let g1=creategreet("Good Morning")
let g2=creategreet("Good Evening")
