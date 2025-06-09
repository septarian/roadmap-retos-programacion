//clases
class Cuadrado {
    // El método constructor es un método especial para crear e inicializar un objeto creado con una clase.
    constructor(alto, ancho){   
        this.alto = alto
        this.ancho = ancho
    }

    get area(){
        return this.alto * this.ancho
    }

    perimetro(){
        return 2 * (this.alto + this.ancho)
    }
}

const a = new Cuadrado(20, 10)
const b = new Cuadrado(100, 30)

console.log(a.area)
console.log(b.perimetro())
a.alto = 5
console.log(a.area)

//EXTRA

//STACK
class Pila {
    constructor(){
        this.stack = []
    }
    encimar(obj){
        this.stack.push(obj)
    }
    quitar(){
        this.stack.pop()
    }
    contar(){
        return this.stack.length
    }
    mostrar(){
        this.stack.forEach(function(e){     //lo que recibe este metodo junto con el .map() y .reduce() es el elemento individual del arreglo
            console.log(`'${e}'`)
        })
    }
}

const arr = new Pila()
//agregar
arr.encimar("hola")
arr.encimar("como")
arr.encimar("estas")
arr.encimar("campeon")
console.log(arr.stack)
//quitar
console.log(arr.stack)
arr.quitar()
console.log(arr.stack)
arr.quitar()
console.log(arr.stack)
//contar
console.log(arr.contar())
//mostrar todos los elementos que tiene
arr.mostrar()

//QUEUE
class Cola {
    constructor(){
        this.queue = []
    }
    formarse(obj){
        this.queue.push(obj)
        console.log(this.queue)
    }
    atender(){
        this.queue.shift()
        console.log(this.queue)

    }
    contar(){
        console.log(`Quedan ${this.queue.length} Personas` )
    }
    mostrar(){
        this.queue.map(element => {
            console.log(`Lugar ${element}`)
        })
    }
}

const butt = new Cola()
//agregar
console.log("formandose...")
butt.formarse(1)
butt.formarse(2)
butt.formarse(3)
butt.formarse(4)
butt.formarse(5)
//quitar
console.log("atendiendo...")
butt.atender()
butt.atender()
butt.atender()
//contar
console.log("contando...")
butt.contar()
//mostrar
console.log("Mostrando numero de lugar...")
butt.mostrar()