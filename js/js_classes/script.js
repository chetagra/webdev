class person{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    isadult(){
        return this.age>=18
    }

}

let p1=new person("chetan",21)
let p2=new person("Riyanshi",18)
console.log(p1.isadult())
console.log(p2.isadult())

class student extends person{
    constructor(name,age,grade){
        super(name,age)
        this.grade=grade
    }
    
}
let s=new student("Chetan",21,2)
