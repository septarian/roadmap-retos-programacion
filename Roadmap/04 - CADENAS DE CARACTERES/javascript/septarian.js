//operaciones con cadenas de caracteres
const c = "hola"
const d = "javascript"

//concatenacion
console.log(c +" " + d)
console.log(c.concat(" ",d, " saludos cordiales"))
//acceder a un caracter
console.log(c[3])
console.log(c.charAt(3))
//comparar
let a = "a";
let b = "b";
if (a < b) {
  // true
  console.log(a + " es menor que " + b);
} else if (a > b) {
  console.log(a + " es mayor que " + b);
} else {
  console.log(a + " y " + b + " son iguales.");
}
//eval, objeto string y valueOf
s1 = "2 + 2"
s2 = new String("2 + 2")
console.log(eval(s1))   //devuelve el resultado de la operacion del string, como si fueran numeros
console.log(eval(s2))   //devuelve el string literal
console.log(eval(s2.valueOf()))   //Convierte el objeto string en un string primitivo
//escape
// \'	Comilla sencilla
// \"	Comilla doble
// \\	Barra inversa
// \n	Nueva línea
// \r	Retorno de carro
// \v	Tabulación vertical
// \t	Tabulación
// \b	Retroceso
// \f	Avance de página
console.log("hola \f 66")
console.log("hola \b uu")
console.log("hola \t dd")
console.log("hola \v jj")
console.log("hola \r jj")
console.log("hola \n jj")
console.log("hola \\ jj")
console.log("hola \" jj")
console.log("hola \' jj")
//devuelve el numero de caracteres que tiene 
console.log(c.length)
//Devuelve un número entero no negativo que es el valor del punto de código del punto de código codificado en UTF-16 que comienza en la pos especificada
console.log(c.codePointAt(2))
//comprueba si el string tiene lo que se busca (ho)
console.log(c.includes("ho"))
//comprueba si el string termina con lo que se busca
console.log(c.endsWith("la"))
//devuelve el indice de lo que se busca o un -1 si no lo encuentra
console.log(d.indexOf("a"))
//Devuelve un número que indica si la cadena de referencia compareString viene antes, después o es equivalente a la cadena dada en el orden de clasificación.
console.log(c.localeCompare())
//revisa si existe y devuelve el indice, si no devuelve null
console.log(c.match("o"))
//revisa si existe y devuelve el indice de todos los matches, si no devuelve null
console.log(d.matchAll("a"))
//rellena el final del string con lo que se diga, el primer argumento dice hasta cual indice se va a detener, el default son espacios
console.log(c.padEnd(8, "."))
//rellena el final del string con lo que se diga, el primer argumento dice hasta cual indice se va a detener, el default son espacios
console.log(c.padStart(8, "."))
//convierte el string en arreglo
console.log(c.split(""))
//remplaza 
console.log(c.replace("hola", "adios"))
//remplaza todas las ocurrencias
console.log(d.replaceAll("a", "si"))


//EXTRA

function polindromos(pal0){
    let w0 = pal0.toLowerCase()
    let n0 = w0.split("").reverse().join("")

    console.log((w0 === n0) ? "Es polindromo" : "no es polindromo")
}

function anagramas(pal1, pal2){
    let w1 = pal1.toLowerCase().split("").sort().join("")
    let w2 = pal2.toLowerCase().split("").sort().join("")

    console.log((w1 === w2) ? "Son anagramas" : "No son anagramas")
}

function isogramas(pal3){
    let bool = true
    let iso = new Array()
    let w3 = pal3.toLowerCase().split("")

    for(let i of w3){
        if(!iso.includes(i)){
            iso.push(i)
        }else{
            bool = false
            break
        }
    }

    console.log((bool) ? "Es un isograma" : "No es un isograma")
}

const word0 = "radar"
const word1 = "undertale"
const word2 = "deltarune"
const word3 = "lumberjacks"

polindromos(word0)
anagramas(word1, word2)
isogramas(word3)