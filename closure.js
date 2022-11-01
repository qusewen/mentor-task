// Задача 1

function sums(c) {
  return function (a) {
    return function (b) {
      return c(a, b);
    };
  };
}

function sum(a, b) {
  return a + b;
}

let curriedSum = sums(sum);

console.log(curriedSum(2)(2));

// Задача 2
// isBetween
function inBetween(a, b) {
  return function (x) {
    return x >= a && x <= b;
  };
}

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.filter(inBetween(3, 6)));

// isArray

function inArray(arr) {
  return function (x) {
    return arr.includes(x);
  };
}

console.log(arr.filter(inArray([1, 2, 10])));

// Задача 3

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];

function fields(field) {
  return (a, b) => (a[field] > b[field] ? 1 : -1);
}

console.log(users.sort(fields("name")));

//Задача 4


function makeArmy (){
    let shooters = [];
    for(let i =0; i<= 10; i++){
        let shooter = function(){
            console.log(i)
        };
        shooters.push(shooter)
    }
    return shooters
}
let army = makeArmy();
console.log(army[10]())