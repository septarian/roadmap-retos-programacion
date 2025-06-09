class Animal{
    constructor(nombre){
        this.nombre = nombre
    }
    sonido(){
        console.log(`El ${this.nombre} hace ruido no especificado...`)
    }

    camina(){
        console.log(`El ${this.nombre} camina...`)
    }

}
class Perro extends Animal{
    constructor(nombre){
        super(nombre)
    }
    sonido(){
        console.log(`El ${this.nombre} ladra`)
    }

}
class Gato extends Animal{
    constructor(nombre){
        super(nombre)
    }
    sonido(){
        console.log(`El ${this.nombre} maulla`)
    }
    trepa(){
        console.log(`El ${this.nombre} trepa`)
    }

}



const zimba = new Perro('perro')
const wisky = new Gato('gato')
zimba.sonido()
zimba.camina()
wisky.sonido()
wisky.camina()
wisky.trepa()

//EXTRA
class Empleado{
    constructor(nombre){
        this.nombre = nombre
    }

    trabaja(){
        console.log(`${this.nombre} esta trabajando...`)
    }
}
class Jefe extends Empleado{
    administra(){
        console.log(`el jefe ${this.nombre} con Id ${this.id} esta administrando la empresa...`)
    }
    orden(){
        console.log(`${this.nombre} con Id ${this.id} esta dando ordenes...`)
    }
}
class Gerente extends Jefe{
    gestiona(){
        console.log(`el gerente ${this.nombre} con Id ${this.id} esta gestionando...`)
    }
    ayuda(){
        console.log(`el gerente ${this.nombre} con Id ${this.id} esta ayudando...`)
    }
}

class Programador extends Empleado{
    trabaja(){
        console.log(`El empleado ${this.nombre} con Id ${this.id} esta programando...`)
    }
}

const erick = new Jefe('Erick', 1)
const johnny = new Gerente('Johnny', 2)
const gyro = new Programador('Gyro', 3)
console.log("\n///////////////////EXTRA///////////////////////\n")
erick.administra()
erick.orden()
erick.trabaja()
johnny.trabaja()
johnny.ayuda()
johnny.gestiona()
johnny.orden()
gyro.trabaja()