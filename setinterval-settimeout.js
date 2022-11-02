// Задача 1

function printNumbers(from, to){
    let count = from;
   setInterval(function (){
        console.log(count)
        if(count < to){
            count ++ 
        }
    },1000)

}
console.log(printNumbers(1,10))

// Задача 2

function printnum(from, to){
    let count = from;
    function start(){
        console.log(count)
        if(count == to){
            clearInterval(timer)
        }
        count ++
    }
    start()
    let timer = setInterval(start, 1000)
}

console.log(printNumbers(10,20))