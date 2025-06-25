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
