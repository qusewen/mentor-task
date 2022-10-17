function* strGenerator(){
  yield 'h'
  yield 'e'
  yield 'l'
  yield 'l'
  yield 'o'

}

const str = strGenerator()


function* numberGen(n=10){
  for(let i =0; i < n; i++){
    yield i
  }
}

const num = numberGen(7)

const iterator = {
  [Symbol.iterator](n=10){
    let i = 0;

    return {
      next(){
        if(i < n){
          return{
            value: ++i,
            done: false
          }
            }else{
              return {
                value: undefined,
        done: true
          }
        }
      }
    }
  }
}


for (let k of iterator){
  console.log(k)
}