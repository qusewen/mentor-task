// Задание 1

let date = new Date(2012, 1, 20, 3, 12);
console.log(date);

// Задание 2

let date2 = new Date();
let day = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресение",
];
function getWeekDay(date2) {
  console.log(date2.getDay());
    day.map((item, index) => index + 1  == date2.getDay()? console.log(item) : console.log())
}

getWeekDay(date2);


// Задание 3

function getLocalDay(date) {
    let day = date.getDay();
   return day == 0 ? day=7 : day;

  }

  console.log(getLocalDay(date2))


// Задание 4

function getDateAgo(date, days) {
    date.setDate(date.getDate() - days);
    return date.getDate();
  }

console.log(getDateAgo(date2, 5))


// Задание 5 

function getLastDayOfMonth(year, month){
    let date4 = new Date(year, month, 0)
    return date4.getDate()
}

console.log(getLastDayOfMonth(2022,10))

// Задание 6 

function getSecondsToday(){
    let date5 = new Date()
    return  date5.getHours() * 3600 + date5.getMinutes() * 60 + date5.getSeconds()
}

console.log(getSecondsToday())


// Задание 7


function getSecondsToTomorrow(){
    let date5 = new Date()
    let allDay = 24 * 3600;
    return allDay -  (date5.getHours() * 3600 + date5.getMinutes() * 60 + date5.getSeconds())
}

console.log(getSecondsToTomorrow())


// Задание 8 

let date6 = new Date();

function formatDate(date){
    let date6 = new Date();
}

console.log(formatDate())

