//recursividad

function recurso(num){
    if (num < 0) return
    console.log(num)
    return recurso(num -1 )
}

const a = 100
recurso(a)

//EXTRA
function facto(numero, minus){
    if(minus < 1) return
    console.log(`${numero} * ${minus} = ${numero *= minus}`)
    return facto(numero, minus - 1)
}

const b = 6
const c = b - 1
facto(b, c )
 ///////////////fibbonacci
function aureo(pos, cont, first, second){
    //declaracion de varibles
    let fib = 0
    cont++
    
    //si con es igual a la posicion se detiene la aplicacion
    if(cont > pos) return `El valor de la posicion ${pos} es ${second}`

    //si cont - 1 es igual a 0 se devuelve 0 y se vuelve a llamar a la funcion
    if(cont-1 === 0){
        console.log(0)
        return aureo(pos, cont, first, second)

    //si cont - 1 es igual a 1 se devuelve 1 y se vuelve a llamar a la funcion
    }else if( cont-1 === 1){
        console.log(1)
        return aureo(pos, cont, first, second)
    }

        //ejecucion del programa
        console.log(`${first} + ${second} = ${fib = first + second}`)
        first = second
        second = fib
        return aureo(pos, cont, first, second)
}

const pos = 5
console.log(aureo(pos, 0, 0 , 1))



// function fibonacci (n) {
//     if (n <= 1) {
//         return n;
//     }

//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

// console.log(fibonacci(6)); // 8