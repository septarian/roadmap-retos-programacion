//tipo de dato por valor
let int = "10"
let int2 = "10"
int2 = "20"
int = "30"
console.log(int)
console.log(int2)

//Tipo de dato por referencia (posicion de memoria)
const arr = [10, 20]
const arr2 = arr
arr.push(50)
arr2.push(60)
console.log(arr)
console.log(arr2)

//funcion con dato por referencia
const ari = [10, 20]
function referencia(v){
    v.push(40)
    console.log(v)
}
referencia(ari)
console.log(ari)

//copiar dato de referencia con otra referencia
const obj = {name: "erick", id: 1}
const obj2 = Object.assign(obj)     //copia un objeto y tambien puede fusionar varios   // Si el valor del objeto es una referencia va a copiar la referencia

const arre = [10,11,12]
const arre2 = [...arre] //propagacion
arre2.push(1)
arre.push(2)
const arre3 = arre2.slice() //extrae los elementos y hace un arreglo de ellos
arre3.push(3)

console.log(obj2)
console.log(arre)
console.log(arre2)
console.log(arre3)

//EXTRA
function valor(int1, int2){
    const temp = int1
    int1 = int2
    int2 = temp

    console.log(int1, int2)
}
let a = 10
let b = 20
valor(a, b)

console.log(a, b)

function referencia(arr1, arr2){
    console.log(arr2)
    console.log(typeof(arr2))

    let cr = [...arr1]
    let dr = [...arr2]

    console.log(dr)
    console.log(cr)
}
const ar = [10, 20]
const br = [40, 50]

referencia(ar, br)

console.log(ar)
console.log(br)
