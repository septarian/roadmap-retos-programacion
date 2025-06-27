//enumerados

//ejemplo
const animo = {
    //al convertir el valor en un symbol hace que el usuario deba llamarlo siempre asi "animo.ALEGRE" para que funcione
    ALEGRE: Symbol('ALEGRE'),
    TRISTE: Symbol('TRISTE')
    //VALOR: ID DEL VALOR
}
function greet(mood) {
   if (mood === animo.ALEGRE) {
      console.log('Bueeeenasss');
   }
   console.log('Buenos días, serán para ti');
}
//las 2 llamadas de funcion funcionan correctamente
//greet('ALEGRE');    //usando id de clave
greet(animo.TRISTE);    //usando la clave
greet(animo.ALEGRE);    //usando la clave

///////////////////////////
   console.log('//////////////////////Ejercicio////////////////////');

const week = {
    MONDAY: 1,
    TUESDAY: 2,
    WEDNESDAY: 3,
    THURSDAY: 4,
    FRIDAY: 5,
    SATURDAY: 6,
    SUNDAY: 7
}
function getDay(day){
    console.log("hola")

    switch(day){
        case week.MONDAY:
            console.log("Es lunes")
            break
        case week.TUESDAY:
            console.log("Es martes")
            break
        case week.WEDNESDAY:
            console.log("Es miercoles")
            break
        case week.THURSDAY:
            console.log("Es jueves")
            break
        case week.FRIDAY:
            console.log("Es viernes")
            break
        case week.SATURDAY:
            console.log("Es sabado")
            break
        case week.SUNDAY:
            console.log("Es domingo")
            break
        default:
            console.log("Dia no valido")
    }

}
getDay(5)

//EXTRA
console.log('//////////////////////Extra////////////////////');

const OrdenStatus = {
    PENDIENTE: Symbol(1),
    ENVIADO: Symbol(2),
    ENTREGADO: Symbol(3),
    CANCELADO: Symbol(4),
}
class Pedido{
    constructor(id){
        this.id = id
        this.estatus = OrdenStatus.PENDIENTE
    }
    
    enviar(){
        if(this.estatus === OrdenStatus.PENDIENTE){
            this.estatus = OrdenStatus.ENVIADO
            console.log("Se a enviado el producto ",this.id)
        }else{
            console.log("No se puede enviar, probablemente ya fue enviado o cancelado")
        }
    }
    entregar(){
        if(this.estatus === OrdenStatus.ENVIADO){
            this.estatus = OrdenStatus.ENTREGADO
            console.log("El pedido se a entregado con exito")
        }else{
            console.log("No se pudo entregar, revisa el estado del envio")
        }
    }
    cancelar(){
        if(this.estatus !== OrdenStatus.ENTREGADO){
            this.estatus = OrdenStatus.CANCELADO
            console.log("El pedido se a cancelado")
        }else{
            console.log("No se pudo cancelar, puede que ya haya sido entregado")
        }
    }
    mostrar(){
        switch(this.estatus){
            case OrdenStatus.PENDIENTE:
                console.log("El pedido ",this.id," esta pendiente",)
                break
            case OrdenStatus.ENVIADO:
                console.log("El pedido ",this.id," a sido enviado",)
                break
            case OrdenStatus.ENTREGADO:
                console.log("El pedido ",this.id," a sido entregado",)
                break
            case OrdenStatus.CANCELADO:
                console.log("El pedido ",this.id," a sido cancelado",)
                break
        }
    }

}

let comida = new Pedido(1)
let lavadora = new Pedido(2)
comida.enviar()
comida.entregar()
comida.cancelar()
comida.mostrar()
console.log("/////////////////////////////////////////////////////////")
lavadora.entregar()
lavadora.mostrar()
lavadora.enviar()
lavadora.mostrar()
lavadora.cancelar()
lavadora.entregar()
lavadora.mostrar()
