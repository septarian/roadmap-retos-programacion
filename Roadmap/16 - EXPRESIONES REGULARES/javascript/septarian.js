/*expresiones regulares
    /\d/ Encuentra cualquier digito  EJEMPLO: '2' en 'B2'
    /\D/ Encuentra cualquier caracter que NO sea un digito   EJEMPLO: 'B' en 'B2'
    /\w/ Busca cualquier caracter alfanumerico del alfabeto latino basico    EJEMPLOS: 'M' EN 'MANZANA' - '5' EN '5.28'
    /\W/ Busca cualquier caracter que NO sea del alfabeto latino basico    EJEMPLO: '%' EN '50%'
    /\s/ Busca un solo caracter de espacio en blanco EJEMPLO: 'BAR' EN 'FOO BAR'
    /\S/ Busca un solo caracter que NO sea un espacio en blanco EJEMPLO: 'FOO' EN 'FOO BAR'
    /\^/ Coincide con el comienzo de la entrada EJEMPLO: /^A/ = 'A' EN 'AN APPLE'
    /\$/ Coincide con final de la entrada EJEMPLO: /a$/ = NO RECONOCE LA 'T' EN 'EATER' PERO SI EN 'EAT'
    Argumento g: Encuentra todas las coincidencias EJEMPLO: '/hi/g' EN 'hi there, hi again' = ["hi", hi] 
    Argumento i: Hace que la expresion regular ignore la distincion entre minusculas y mayusculas

*/

const text = "Hola 27 usuraios del 2025"
//Extrae todos los numeros del string text
let regular = text.match(/\d/g)

console.log(regular)

//EXTRA

//Otra forma de crear una expresion regular es llamando al constructor Regexp y la expresion se pone como string
//let regex_email = new RegExp("@")
let regex_email = /^\D+@\w+\.[a-zA-z]+$/
let regex_phone = /\b\d{10}\b/
let regex_url = /^https?:\/\/./

let email = "erickf.mora@gmail.com"
let phone = "3321904500"
let url = "https://retosdeprogramacion.com/roadmap"

//Revisa que el string email si lleve un "@"
let res_email = regex_email.test(email)
//Revisa que el string phone si tenga 10 numeros y no mas
let res_phone = regex_phone.test(phone)
//Revisa que el string url empiece con http:// o https://
let res_url = regex_url.test(url)

console.log(res_email)
console.log(res_phone)
console.log(res_url)

// let f = email.match(regex_email)
// console.log(f)