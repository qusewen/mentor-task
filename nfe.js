// Задача 1

function makeCounter() {
    let count = 3;
    function counter() {
      return count++;
    }
    counter.set = value => count = value;
    counter.dec = () => count--;
    counter()
    counter()
    counter()
    return  counter.dec()
  }

console.log(makeCounter())


// Задача 2

