// Задача 1

// 1 вариант решения через цикл

function sumTo(num1) {
  let sum = 0;
  for (let i = 0; i <= num1; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumTo(4));

// 2 вариант решения через рекурсию
function sumToSecondMethod(num2) {
  if (num2 == 1) return 1;
  return (num2 += sumToSecondMethod(num2 - 1));
}
console.log(sumToSecondMethod(4));
// 3 вариант через формулу прогрессии
let sum3 = 0;
function sumToProgressMethod(num3) {
  return (num3 * (num3 + 1)) / 2;
}
console.log(sumToProgressMethod(4));
// Задача 2
function factorial(factor) {
  if (factor == 1) return 1;
  return factor * factorial(factor - 1);
}
console.log(factorial(5));




// Задача 3

function fib(n){
  if(n <= 1) return n;
  return fib(n-1) + fib(n-2)
}

console.log(fib(7))


// Задача 4

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list){
    console.log(list.value)
    if(list.next){
      printList(list.next)
    }
}

printList(list)


// Задача 5

function printReverseList(list){
  if(list.next){
    printReverseList(list.next)
  }
  console.log(list.value)

}

printReverseList(list)