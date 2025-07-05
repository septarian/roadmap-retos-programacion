//Patrones de diseño: DECORADORES
//EJEMPLO DECORADOR:

class Perfil{
    constructor(name, email){
        this.name = name
        this.email = email
    }

    display(){
        console.log(`name: ${this.name}`)
        console.log(`email: ${this.email}`)
    }
}

class BasicProfile extends Perfil{
    constructor(name, email){
        super(name, email)
    }
}

class ProfileDecorator extends Perfil{
    constructor(perfil){
        super(perfil.name, perfil.email)
        this.perfil = perfil
    }

    display(){
        this.perfil.display()
    }
}

class ProfileBio extends ProfileDecorator{
    constructor(perfil, bio){
        super(perfil)
        this.bio = bio
    }

    display(){
        super.display()
        console.log(`bio: ${this.bio}`)
    }
}

class ProfileMedia extends ProfileDecorator{
    constructor(perfil, media){
        super(perfil)
        this.media = media
    }

    display(){
        super.display()
        console.log(`facebook: ${this.media}`)
    }
}

//creamos una clase concreta de base
let base = new BasicProfile("erick", "erickf.mora@gmail.com")
//creamos la clase decorador que recibe la base
let decorado = new ProfileDecorator(base)
//creamos subclases que se extienden del decorador para agregar nuevas funcionalidades
let decorado_bio = new ProfileBio(base, "hola soy ingeniero de software")
let decorado_media = new ProfileMedia(base, "erick mora")
//la subclase recibe a decorado_bio para asi juntar la informacion de ambas
let decorado_juntos = new ProfileMedia(decorado_bio, "erick mora")
console.log("\nclase concreta////////////////////////////////")
base.display()
console.log("\nclase decoradora////////////////////////////////")
decorado.display()
console.log("\nclase decoradora con biografia////////////////////////////////")
decorado_bio.display()
console.log("\nclases decoradoras juntas////////////////////////////////")
decorado_juntos.display()

//EXTRA
console.log("\nEXTRA////////////////////////////////")

function logHola(fn){
    let cont = 0
    return function(...args){
        cont++
        console.log(`\nLa funcion se a llamado ${cont} vece(s)`)
        console.log(`llamando a ${fn.name}`)
        fn(...args)
    }
}

function hola(name){
    console.log("hola", name)
}
function adios(name){
    console.log("adios", name)
}

const deco = logHola(hola)
const de = logHola(adios)
deco("Erick")
deco("hhh")
deco("Eee")
de("Erick")
de("fefek")
de("tr4")
deco("Eee")
de("fefek")

