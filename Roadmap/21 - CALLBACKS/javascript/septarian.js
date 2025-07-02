//CALLBACKS

//la funcion algo la manda a llamar
function saludo(palabra) {
  console.log("Hola mis estimados " + palabra);
}
//recibe la funcion saludo sin parentesis para que no se ejecute al instante
function algo(callback) {
  let word = "y estimadas";
  //llama a la funcion saludo
  callback(word);
}
algo(saludo);

//EXTRA

function pedidos(plato, confirma, listo, entrega) {
    
  setTimeout(() => {
    confirma(plato, listo, entrega);
    //se ejecuta entre 1 a 10 segundos
  }, Math.random() * 10 * 1000);
}

function confirmacion(comida, listo, entrega) {
  console.log(`${comida} confirmado`);

  setTimeout(() => {
    listo(comida, entrega);
  }, Math.random() * 10 * 1000);
}
function preparado(comida, entrega) {
  console.log(`${comida} esta listo`);

  setTimeout(() => {
    entrega(comida);
  }, Math.random() * 10 * 1000);
}
function entregado(comida) {
  console.log(`${comida} a sido entregado`);
}

pedidos("pollo", confirmacion, preparado, entregado);
pedidos("pizza", confirmacion, preparado, entregado);
pedidos("hamburguesa", confirmacion, preparado, entregado);
