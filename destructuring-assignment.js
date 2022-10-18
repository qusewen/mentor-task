// Задание 1
let user = {
    name: "John",
    years: 30
  };
let {name, years: age, isAdmin = false} = user
console.log(`${name} ${age} ${isAdmin}`)


// Задание 2
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
 let maxSalar = 0;
 let maxName = null;
  function topSalaries(salaries){
     for(let [key, value] of Object.entries(salaries)){
        if(maxSalar < value){
            maxSalar = value;
            maxName = key;
        }
        
     }
     return maxName
  }

  console.log(topSalaries(salaries))