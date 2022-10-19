//Задание 1
// function camelize(str) {
//   return str.split('-')
//   .map((word, i) => {
//     if(i == 0){
//      return word
//     }else{
//       return word[0].toUpperCase() + word.slice(1)
//     }
//   })
//   .join('');
// }

// console.log(camelize("background-color"))
// console.log(camelize("list-style-image"))
// console.log(camelize("-webkit-transition"))

// //Задание 2

// function filterRange(arr, a, b) {
//   return arr.filter(item => (a <= item && item <= b));
// }

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);
// console.log( filtered );
// console.log( arr );

//Задание 3
// function filterRangeInPlace(arr2, a, b) {

//   for (let i = 0; i < arr2.length; i++) {
//     let value = arr2[i];

//     // удалить, если за пределами интервала
//     if (value < a || value > b) {
//       arr2.splice(i, 1);
//       i--;
//     }
//   }

// }

// let arr2 = [5, 3, 8, 1];

// filterRangeInPlace(arr2, 1, 4);
// console.log( arr2 );

//Задание4

// let arr5 = [5, 2, 1, -10, 8];
// console.log(arr5.sort((a, b) => b - a))

//Задание5
// function copySorted(arr4) {
//   return arr4.slice().sort();
// }

// let arr4 = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr4);

// console.log( sorted );
// console.log( arr4 );

//Задание 6
// function unique(arr) {
//   return Array.from(new Set(arr))
// }
// let strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", ":-O"
// ];
// console.log(unique(strings));

//Задание 7
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [vasya, petya, masha];

// let names = users.map((item) => item.name);

// console.log(names);

//Задание 8
// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };
// let users = [vasya, petya, masha];
// let usersMapped = users.map((user) => ({
//   fullName: `${user.name} ${user.surname}`,
//   id: user.id,
// }));
// console.log(usersMapped[0].id);
// console.log(usersMapped[0].fullName);


//Задание 9

// function sortByAge(arr) {
//   arr.sort((a, b) => a.age > b.age ? 1 : -1);
// }

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [ vasya, petya, masha ];

// sortByAge(arr);
// console.log(arr[0].name); 
// console.log(arr[1].name); 
// console.log(arr[2].name); 

//Задание 10

// function shuffle(array) {
//   array.sort(() => Math.random() - 0.5);
// }

// let arr = [1, 2, 3];
// shuffle(arr);
// console.log(arr);


// Задание 11

// function getAverageAge(users) {
//   return users.reduce((prev, user) => prev + user.age, 0) / users.length;
// }

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [ vasya, petya, masha ];

// console.log( getAverageAge(arr) );