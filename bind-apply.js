const b1 = document.querySelector('.b-1');

b1.onclick = test;

function test(){
    this.style.background = 'orange'
}


test.call(b1)   // вызвал функциюю и показал b1

// задача 1
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user = {
    name: 'Вася',
  
    loginOk() {
      alert(`${this.name} logged in`);
    },
  
    loginFail() {
      alert(`${this.name} failed to log in`);
    },
  
  };
  
  askPassword(user.loginOk.bind(user), user.loginFail.bind(user));


  // задача 2
  askPassword(() => user.login(true), () => user.login(false));