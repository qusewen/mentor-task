// Задание 1

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];

  let readMessages = new WeakSet();

  readMessages.add(messages[0]);
  readMessages.add(messages[2]);
  readMessages.add(messages[0]);
  console.log(readMessages)

  console.log(`Сообщение 0 прочитано? ${readMessages.has(messages[0])}`)
  console.log(`Сообщение 1 прочитано? ${readMessages.has(messages[1])}`)
  console.log(`Сообщение 2 прочитано? ${readMessages.has(messages[2])}`)


  for(let i =0; i<messages.length; i++){
    if(readMessages.has(messages[i])){
        readMessages.delete(messages[i])
    }else{
        
    }
  }
 // readMessages.delete(messages[0])

  console.log(readMessages)

  // Смысл данного способа, если приходится все равно вручную прописывать удаление элемента который прочтен ?
  // Как часто вообще им пользуются ? ты им пользуешься ? 



// Задание 2

let readMap = new WeakMap();
readMap.set(messages[0], new Date());

console.log(readMap)
