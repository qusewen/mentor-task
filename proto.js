let animal = {
    eats: true,
    walk() {
      alert("Animal walk");
    },
    hi(){
console.log('hello')
    } 
  };
  
  let rabbit = {
    jumps: true,
    __proto__: animal
  };
  
  // walk взят из прототипа
  rabbit.hi();


// задача 1

let animals = {
    jumps: null
  };
  let rabbits = {
    __proto__: animals,
    jumps: true
  };
  
  alert( rabbits.jumps ); // true
  
  delete rabbits.jumps;
  
  alert( rabbits.jumps ); // null
  
  delete animals.jumps;
  
  alert( rabbits.jumps ); // undefined


  // задача 2

  let head = {
    glasses: 1
  };
  
  let table = {
    pen: 3,
    __proto__:head
  };
  
  let bed = {
    sheet: 1,
    pillow: 2,
    __proto__:table
  };
  
  let pockets = {
    money: 2000,
    __proto__: bed
  };

  // задча  3
//   let animal = {
//     eat() {
//       this.full = true;
//     }
//   };
  
//   let rabbit = {
//     __proto__: animal
//   };
  
//   rabbit.eat();
// при вызове свойство full  получит rabbir


