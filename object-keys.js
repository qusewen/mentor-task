let user = {
    name: "John",
    age: 30
  };

 console.log(Object.keys(user)) 
 console.log(Object.values(user)) 
 console.log(Object.entries(user)) 

 for (let value of Object.values(user)){
    console.log(value)
 }

 let doubleCount =  Object.fromEntries(
    Object.entries(user).map(([key, value]) => [key, value * 2])
 );
 console.log(doubleCount)

 console.log(doubleCount)

 // Почему при выводе ключ стал NAN ?


 // Задание 1
 let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  let count = 0;
  
  function sumSalaries(salaries) {
    for( let value of Object.values(salaries)){
        count +=value;
    }
    return count
  }
  sumSalaries(salaries)
  console.log(count)



  // Заданрие 2

  let users = {
    name: 'John',
    age: 30
  };
  valueCount = 0;
  function counts(obj){
    for (let values of Object.values(obj)){
        values? valueCount++ : valueCount
    }
  }

  counts(users)

  console.log(valueCount)