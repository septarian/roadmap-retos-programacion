//PATRONES DE DISEÑO: SINGLETON
//EJEMPLO SINGLETON:  (NO PUEDE CREAR MAS DE UNA INSTANCIA)

let instance
class Gobierno{
    constructor(name, empleados){
        this.name = name
        this.empleados = empleados

        if(instance){
            return instance
        }
        instance = this
    }
}
let amlo = new Gobierno("amlo", 30)
console.log(amlo)
//no funcionara porque solo puede declarar una instancia
let sheinbaun = new Gobierno("sheinbaun", 50)
//retorna amlo porque no puede crear mas de una instancia
console.log(sheinbaun)


//EXTRA
let stand
class User{
    constructor(){
        if(stand){
            throw new Error("No puedes crear otro usuario")
        }
        this.user = null
        stand = this
    }


    setUser(id,userName,name,email){
        this.user = {
            id,
            userName,
            name,
            email,
        }
    }

    getUser(){
        return this.user
    }

    logout(){
        this.user = null
    }

}

let usuario = new User()
usuario.setUser(1,"septarian","erick","erickf.mora@gmail.com")
console.log(usuario.getUser())
usuario.logout()
console.log(usuario.getUser())

let usuario2 = new User()
usuario.setUser(2,"sep","ettr","eee@gmail.com")
console.log(usuario2.getUser())

