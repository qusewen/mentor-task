//Задача 1

function ucFirst(str) {
  return str[0].toUpperCase() + str.slice(1);
}
console.log(ucFirst("vasa"));


//Задача 2

function checkSpam(str) {
  let newStr = str.toLowerCase();

  return newStr.includes('viagra') || newStr.includes('xxx');
}

alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );


//Задча 3

function truncate(str, maxlength){
  if(str.length > maxlength){
   return str.slice(0,maxlength) + '…'
  }else{
    return str
  }
}
console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:",20))


//Задача 4
function extractCurrencyValue(str){
  return +str.slice(1);
}
