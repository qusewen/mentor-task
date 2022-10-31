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

