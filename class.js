class User {
    constructor(name,age,id){
        this.name = name
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



class Animal {
    constructor(name){
        this.name=name
        this.speed = 0
    }
    run(speed){
       this.speed = speed
       console.log(`${this.name} бежит со скоростью ${this.speed}.`) 
    }
    stop(){
        this.speed = 0
        console.log(`${this.name} стоит неподвижно.`)
    }
}

let animal = new Animal("Мой питомец");
console.log(animal)

class Rabbit extends Animal{
    constructor(name, earLength) {
        super(name);
        this.earLength = earLength;
      }


    hide(){
        console.log(`${this.name} прячется!`)
    }
    stop(){
        super.stop();
        this.hide();
    }
}
let rabbit = new Rabbit("Белый кролик");
console.log(rabbit.run(5))
console.log(rabbit.stop())
console.log(rabbit.hide(0))









