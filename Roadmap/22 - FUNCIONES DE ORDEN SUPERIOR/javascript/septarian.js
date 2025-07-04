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
    {name: 'Gyro', birth: new Date('01 junio 1959'), qualification: [8, 8, 6, 7] },
    {name: 'Johnny', birth: new Date('29 septiembre 1961'), qualification: [8.7, 10, 9, 7.5] },
    {name: 'Diego', birth: new Date('17 febrero 1954'), qualification: [5, 7, 9, 8.9] },
    {name: 'Valentine', birth: new Date('12 december 1950'), qualification: [10, 10, 9.3, 9.4] },
]

//funcion de elemento superior
Array.prototype.lista = function(callback){
    const list = []
    for(i of this){
        callback(i) ? list.push(callback(i)) : null
    }
    return list
}

//promedio
function prom(i){
    let cont = i.qualification.reduce((acc, el) => {
        acc = acc + el
        return acc
    },0)
    cont = (cont / estudiantes.length).toFixed(1)
    return {name: i.name, promedio: cont,}
}

//mejores estudiantes
function mejor(i){
    const estudiantes = prom(i)
    if(estudiantes.promedio > 9){
        return estudiantes
    }
}

//fecha de nacimiento
function nacimiento(){
    const nacido = [...estudiantes]
    nacido.sort((a,b) => b.birth - a.birth)
    return nacido
}

function alto(){
    const listaPromedios = estudiantes.map(e => prom(e));
    listaPromedios.sort((a, b) => b.promedio - a.promedio);
    return listaPromedios[0]; 
}


//imprimir promedio
const promedio = estudiantes.lista(prom)
console.log("\nPROMEDIO DE ESTUDIANTES\n")
console.log(promedio)

//imprimir mejores estudiantes
const mejores = estudiantes.lista(mejor)
console.log("\nMEJORES ESTUDIANTES\n")
console.log(mejores)

//imprimir estudiantes empezando del mas joven
const edad = nacimiento()
console.log("\nESTUDIANTES ORDENADOS DEL MAS JOVEN AL MAS VIEJO\n")
console.log(edad)

//imprimir mejor calificacion
const altos = alto()
console.log("\nCALIFICACION MAS ALTA\n")
console.log(altos)