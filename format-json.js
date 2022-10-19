let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
  };

  let json = JSON.stringify(student);

  console.log(json)
  console.log(JSON.parse(json))


  // Задание 1

  let user = {
    name: "Василий Иванович",
    age: 35
  };

  let json1 = JSON.stringify(user)
  console.log(json1)
  console.log(JSON.parse(json1))



  // Задание 2 

  let room = {
    number: 23
  };
  
  let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
  };
  
  // цикличные ссылки
  room.occupiedBy = meetup;
  meetup.self = meetup;
  
  console.log( JSON.stringify(meetup, function replacer(key, value) {
    return(key != "" && value == meetup )? undefined : value
  }));