class User {
    constructor(name,age,id){
        this.name =name
        this.age = age
        this.id = id
    }
   userInfo(){
       console.log(this.name,
            this.age,
            this.id)
    }
}

let Petrov = new User('иван', 23, 11)
Petrov.userInfo()


