//conjuntos
let arr = [1, 2, 3, 4, 5, "johnny", "gyro"];
console.log(arr);
//añadir al final
arr.push("diego");
console.log(arr);
//añadir al principio
arr.unshift(0);
console.log(arr);
//añadir bloque de elementos al final
arr.push(6, 7, 8);
console.log(arr);
//añadir bloque de elementos en una posicion concreta
arr.splice(4, 0, 3.25, 3.5, 3.75);
console.log(arr);
//eliminar elemento de posicion concreta
arr.splice(11, 1);
console.log(arr);
//Acutalizar elemento de una posicion concreta
arr.splice(5, 1, 3.55);
console.log(arr);
//comprobar si elemento esta en el conjunto
let find = arr.some((e) => e === 4);
console.log(find);
//eliminar todo el contenido del conjunto
arr.splice(0, arr.length);
console.log(arr);

//set
let set = new Set();

//extra
let extra = [10, 11, 12, 13, 14, 15, "valentine"];
let extra2 = [13, 15, 16, 19, 10, "hot pants"];

//union
let extraus = extra.concat(extra2);
console.log(extraus);

//interseccion
let interseccion = [];
let count = 0;
for (i of extra) {
  if (extra2.includes(i)) {
    interseccion[count] = i;
    count++;
  }
}
console.log(interseccion);

//diferencia
let diferencia = [];
let count2 = 0;
for (i of extra) {
  if (!extra2.includes(i)) {
    diferencia[count2] = i;
    count2++;
  }
}
console.log(diferencia);

//diferenca simetrica
let simetrica1 = [];
let simetrica2 = [];
let cont = 0;
let cont2 = 0
for (i of extra) {
  if (!extra2.includes(i)) {
    simetrica1[cont] = i;
    cont++;
  }
}
for(z of extra2){
    if(!extra.includes(z)){
        simetrica2[cont2] = z
        cont2++
    }
}
simetricos = simetrica1.concat(simetrica2)
console.log(simetricos);