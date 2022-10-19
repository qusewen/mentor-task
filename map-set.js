let map = new Map();

map.set("first", "hello");
map.set(2, 2);
map.set(true, false);
map.set("obj", { key: "hi" });
console.log(map);
console.log(map.size);
map.delete(true);
console.log(map);
console.log(map.get("obj"));
console.log(map.has(2));
map.clear();
console.log(map);

let set = new Set();

let john = { name: "john" };
let pit = { name: "pit" };
let Evgen = { name: "Evgen" };

set.add(john);
set.add(john);
set.add(pit);
set.add(john);
set.add(Evgen);
set.add(Evgen);
console.log(set);
set.delete(john);
console.log(set);

//Задание 1

function unique(arr) {
  let set = new Set(arr);
  return set;
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(values));

//Задание 2

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
  let map = new Map();
  for (let val of arr) {
    let newstr = val.toLowerCase().split("").sort().join("");
    map.set(newstr, newstr);
  }
  return Array.from(map.values());
}
console.log(aclean(arr));


// Задание 3

// Надо сделать из него массив с помощью Array.from()