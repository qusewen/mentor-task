//ЗАДАЧА 1

let a = +prompt("Введите первое число");
let b = +prompt("Введите второе число");

if (a && b) {
  alert(`вы введи а = ${a} и b = ${b} их сумма равна = ${a + b}`);
} else {
  alert("Значение не корректно");
}

// ЗАДАЧА 2

function readNumber() {
  let num;
  do {
    num = prompt("Введите число", 0);
  } while (!isFinite(num));
  if (num === null || num === "") return null;
  return +num;
}
alert(`Вы ввели следующее число: ${readNumber()}`);

//ЗАДАЧА 3

function randomNum(min, max) {
  return min + Math.random() * (max - min);
}
alert(random(1, 5));
alert(random(1, 5));
alert(random(1, 5));


//ЗАДАЧА 4

function randomInteger(min, max){
    let numb= min + Math.random() * (max + 1 - min);
    return Math.floor(numb);
}

