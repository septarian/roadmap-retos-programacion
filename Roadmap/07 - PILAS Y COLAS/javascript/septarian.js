//implementar introduccion a pilas y colas

//Pilas/Stacks (ULTIMO EN ENTRAR - PRIMERO EN SALIR  "LIFO" )
const pila = ['enero', 'febrero', 'marzo', 'abril']

pila.push('mayo')   //Agrega un elemento al final de la pila
console.log(pila)

pila.pop()          //Elimina el ultimo elemento de la pila
console.log(pila)

//Colas/Queues (PRIMERO EN ENTRAR - PRIMERO EN SALIR  "FIFO")
const cola = ['enero', 'febrero', 'marzo', 'abril']

cola.push('mayo')    //Agrega un lemento al final de la cola
console.log(cola)

cola.pop()
console.log(cola)    //Elimina un elemento al principio de la cola

//EXTRA


function stack(web) {

  console.log("escribe una web o escribe siguiente/atras/salir para interactuar con la web")
  response = "wiki"

  while(true)

  if(response === "salir"){
    console.log("saliendo")
    break
  }else if(response === "siguiente"){
    if(!web){
      ("no hay nada")
    }else{

    }
    break
  }else if(response === "salir"){
    break
  }else{
    web.push(response)
    console.log(`Estas en ${response}`)
    stack(web)
    break
  }



}

let web = []
stack(web)