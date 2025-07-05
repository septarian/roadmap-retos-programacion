//LOGGIN
//EJEMPLO
const obj = {
    name: "erick",
    edad: 23,
    direccion:{
        calle: "secretarios",
        numero: 2616
    }
}


console.log("mensaje general")
console.clear()     //borra toda la informacion de la consola

console.group()

console.error("mensaje de error")
console.warn("mensaje de advertencia")
console.info("Mensaje de informacion")

 //Crea un grupo que identa los mensajes posterores hasta groupend
console.group()    
console.log("mensaje de grupo 1")
console.log("mensaje de grupo 2")
console.groupEnd()

//pruebas de errores
console.assert(true, "no pasa nada")
console.assert(false, "algo salio mal")

console.debug("mensaje de depuracion")
console.dir(obj)    //muestra los objetos y arrays de manera mas detallada

//sirven para ver el rendimiento del codigo en la herramienta de desarrolladores del navegador
console.profile("erick")
console.profileEnd("erick")    
console.table(obj)      //MUESTRA OBJETOS O ARRAYS ORDENADO COMO UNA TABLA (IDEAL PARA ARRAYS DE OBJETOS)

console.time("prueba")      //inicia cronometro
console.timeLog("prueba")     //muestra el tiempo transcurrido hasta el momento
console.timeEnd("prueba")   //detiene el cronometro y dice cuanto tiempo tardo en ejecutarse el codigo encapsulado

function contar(){
    //cuenta las veces que se a llamado a si misma
    console.count()
}
function reset(){
    //resetea el contador de count
    console.countReset()
}
contar()
contar()
reset()
contar()

function a(){
    b()
}
function b(){
    //rastrea desde que funcion inicio el problema si es que lo hubiese
    console.trace("Aqui e llegado")
}
a()

console.groupEnd()

console.clear()
// //EXTRA
console.log("EXTRA///////////////////")

const arr = []

class Tareas{
    
    constructor(){
    }

    añadir(tarea){
        console.time("añadiendo")

        console.count("\nnumero de tareas que has agregado:")

        arr.push(tarea)
        console.info("tarea agregada con exito")
        console.assert(typeof tarea !== 'string' ? console.warn("Solo deberias añadir tareas que sean de tipo string") : true)

        console.timeEnd("añadiendo")
    }

    delete(tarea){
        console.time("eliminando")

        if(!arr.includes(tarea)){
            console.error(`\n${tarea} no existe en el array`)
            console.timeLog("eliminando")
            return
        }else{
        const indice = arr.indexOf(tarea)
        arr.splice(indice,1)
        console.debug(`\n${tarea} a sido eliminado`)
        }

        console.timeEnd("eliminando")
    }

    listar(){
        console.time("listando")

        console.info("\nMostrando lista de tareas")
        console.table(arr)
        console.dir(arr)

        console.timeEnd("listando")
    }
}

const user = new Tareas("barrer")

user.añadir("barrer")
user.añadir("jugar")

user.delete("jugar")
user.delete("jugars")

user.añadir("leer")
user.añadir("aprender")

user.listar()
