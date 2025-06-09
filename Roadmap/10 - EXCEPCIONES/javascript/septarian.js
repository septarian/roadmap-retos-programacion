//Exepciones ejemplos
try{
    //Throw genera una exepcion
    throw new Error("soy un error")
    //throw "Otra manera de hacer un error"
}catch(e){
    //Si lo que esta en try falla se ejecuta este codigo
    console.log(`Nombre del error: ${e.name}`)
    console.log(`Motivo del error: ${e.message}`)
}finally{
    //Ya sea que haya un error o no siempre se va a ejecutar este codigo
    console.log("Todos los caminos llevan a mi")
}

try{
    const a = 10/0
    if(a !== number){
        throw "El resultado no es valido"
    }
    console.log(a)
}catch(e){
    console.log("algo salio mal con el calculo, asegurate de que sea valido")
    console.log(`Error en cuestion: ${e}`)
}

try{
    const l = []
    l.foreach(e => e)
    console.log("hola")
}catch(e){
    console.log("algo salio mal" + e )
}


//EXTRA
console.log("\n/////////////EXTRA/////////////////\n")

function error(int, string){
    try{
        for(int of string){
            console.log(int)
        }
        throw new RangeError("Esto no es un error de rango a pesar de las apariencias")
    }catch(e){
        if(e.name === "ReferenceError"){
            console.log("Tienes un error de referencia: " + e)
        }else if(e.name === "TypeError"){
            console.log("Tienes un error de tipado: " + e)
        }else{
            console.log("Tienes un error no contemplado: " + e)
        }
    }finally{
        console.log("A pesar de todo... sigo de pie")
    }
}


error(5, "hola")