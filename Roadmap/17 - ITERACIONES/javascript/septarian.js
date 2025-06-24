//Iteraciones

//for
console.log("for////////////////////////////////////////////////////////////////////////////////")
function forr(){
    for(let i=1;i<=10;i++){
        console.log(i)
    }
}
forr()
//while
console.log("while////////////////////////////////////////////////////////////////////////////////")
function whilee(){
    let i = 1
    while(i <= 10){
        console.log(i)
        i++
    }
}
whilee()
//do while
console.log("do while////////////////////////////////////////////////////////////////////////////////")
let i = 1
function do_while(){
    do{
        console.log(i)
        i++
    }while(i<=10)
}
do_while()

//extra
//recursividad
console.log("recursividad////////////////////////////////////////////////////////////////////////////////")
function recursivo(i){
    if(i > 10) return

    console.log(i)
    i++
    recursivo(i)
}
recursivo(1)
//for of    ("i" se convierte ene el valor que esta iterando)
console.log("for of////////////////////////////////////////////////////////////////////////////////")
function for_of(){

    let x = [1,2,3,4,5,6,7,8,9,10]
    for(let i of x){
        console.log(i)
    }
}
for_of()
//for_in    ("i" se convierte en el indice del valor que esta iterando)
console.log("for in////////////////////////////////////////////////////////////////////////////////")
function for_in(){

    let x = [1,2,3,4,5,6,7,8,9,10]
    for(let i in x){
        console.log(x[i])
    }
}
for_in()
//map
console.log("map////////////////////////////////////////////////////////////////////////////////")
function map(){

    let x = [1,2,3,4,5,6,7,8,9,10]
    x.map((e) => {
        console.log(e)
    })
}
map()
//reduce
console.log("reduce////////////////////////////////////////////////////////////////////////////////")
function reduce(){

    let x = [1,2,3,4,5,6,7,8,9,10]
    x.reduce((acc, el, index) => {
        console.log("Valor actual: ",el," Valor anterior: ",acc," numero de indice: ", index)
        //el return sirve para que regrese el valor de "acc" y lo guarde para la siguiente iteracion
        return acc = el
    },0)
}
reduce()
//for each
console.log("for each////////////////////////////////////////////////////////////////////////////////")
function forEach(){

    let x = [1,2,3,4,5,6,7,8,9,10]
    x.forEach((e, index) => {
        console.log("elemento iterado: ",e," numero de indice: ",index)
    })
}
forEach()
//filter
console.log("filter////////////////////////////////////////////////////////////////////////////////")
function filter(){

    let x = [1,2,3,4,5,6,7,8,9,10]
    x.filter((e, index) => {
    console.log("elemento iterado: ",e," numero de indice: ",index)
    })
}
filter()