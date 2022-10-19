//ЗАДАНИЕ 1


function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }
  
  let user = makeUser();
  
  alert( user.ref.name ); // Каким будет результат?  

  // будет ошибка т.к. this относится к makeUser внешнему объекту а в нем нет name от сюда и выдаст что ожидается name, что бы это исправить 
  // надо записать так что бы this относился к внутренему объекту 
  function makeUserTrue(){
    return{
        name:'John',
        ref(){
            return this
        }
    }
  }

  let userTrue = makeUserTrue();

alert( userTrue.ref().name );



//ЗАДАНИЕ 2

let calculator = {
    read(){
      return  this.a = +prompt('a?'), this.b = +prompt('b?')
              
    },
    sum(){
       return this.a + this.b
    },
    mul(){
      return  this.a * this.b
    }

}
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );


//ЗАДАНИЕ 3

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this
    },
    down() {
         this.step--;
        return this
    },
    showStep: function() { // показывает текущую ступеньку
        alert( this.step );
        return this
    }
  };




ladder.up().up().down().showStep().down().showStep();
