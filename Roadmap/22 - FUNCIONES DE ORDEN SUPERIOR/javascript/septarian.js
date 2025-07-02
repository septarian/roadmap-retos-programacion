//FUNCIONES DE ORDEN SUPERIOR

//EJEMPLO
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Array.prototype.filtrar = function (callback) {
    const arr_filtered = []
    //con this se refiere al array al que se le esta ejecutando esta funcion
    for (let i of this) {
        //si la funcion retorna algo ese algo se agrega al array
        callback(i) ? arr_filtered.push(i) : null
    }
    return arr_filtered
}
//funciones callback
function par(i) {
    return i % 2 === 0
}
function impar(i) {
    return i % 2 !== 0
}

//mandando a llamar las funciones e imprimiendo lo que retornan
console.log(arr.filtrar(par))
const odd = arr.filtrar(impar)
console.log(odd)
//creando la logica de la funcion desde el argumento en lugar de poner una funcion ya creada como argumento
console.log(arr.filtrar((x) => x > 5))

//EXTRA
console.log("/////////////////EXTRA//////////////////////")

const estudiantes = [
    {name: 'Johnny', birth: Date('29 septiembre 1961'), qualification: [8.7, 10, 9, 7.5] },
    {name: 'Gyro', birth: Date('01 junio 1959'), qualification: [8, 8, 6, 7] },
    {name: 'Diego', birth: Date('17 febrero 1954'), qualification: [5, 7, 9, 8.9] },
    {name: 'Valentine', birth: Date('12 diciembre 1950'), qualification: [10, 10, 9.3, 9.4] },
]
Array.prototype.lista = function(callback){
    const list = []
    for(i of this){
        callback(i)
    }
    return list
}

function prom(i){
    let cont = 0
    i.qualification.reduce((acc, el) => {
        acc = cont
        cont = acc + el
    },0)

    cont /= 4
    console.log(`-${i.name} tiene promedio de ${cont}`)
}

const promedio = estudiantes.lista(prom)
console.log(promedio)