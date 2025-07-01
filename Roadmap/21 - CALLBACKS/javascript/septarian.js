//CALLBACKS

//la funcion algo la manda a llamar 
function saludo(palabra){
    console.log("Hola mis estimados " + palabra)
}
//recibe la funcion saludo sin parentesis para que no se ejecute al instante
function algo(callback){
    let word = "y estimadas"
    //llama a la funcion saludo 
    callback(word)
}
algo(saludo)

//EXTRA

function pedidos(plato, confirma, listo, entrega){
    console.log("Confirmando pedido...")
    confirma(plato)
    listo(plato)
}

confirmacion(comida){
    console.log(`${comida} confirmado`)
}
preparado(comida){
    console.log(`${comida} confirmado`)
}

pedidos("pollo", confirmacion, preparado, entregado)