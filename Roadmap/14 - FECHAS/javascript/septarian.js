//fechas

//Fecha y hora actual
let now = new Date()
console.log(now)

//Convierte el string en un objeto Date (9 de octubre 2001)
let birth = new Date("2001-10-09T15:30:09.279")
console.log(birth)

//Obtiene cuantos años han pasado desde date hasta now
let miliseconds = now - birth
const diference = miliseconds / (1000 * 60 * 60 * 24 * 365.25); 
console.log(Math.floor(diference))


//EXTRA
const week = [
    "domingo",
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sabado"
]
const month = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
]


console.log(birth.getFullYear())
console.log(birth.getTime())
console.log(birth.getHours())
console.log(birth.getMonth()+1)
console.log(birth.getFullYear(), birth.getMonth()+1)
console.log(birth.getFullYear(), birth.getMonth()+1, birth.getDate())
console.log(week[birth.getDay()])
console.log(month[birth.getMonth()])
console.log(week[birth.getDay()], month[birth.getMonth()], birth.getDate())
console.log(`${birth.getFullYear()}-${week[birth.getDay()]}-${month[birth.getMonth()]}-${birth.getDate()} ${birth.getHours()}:${birth.getMinutes()}:${birth.getSeconds()}:${birth.getMilliseconds()}`)
