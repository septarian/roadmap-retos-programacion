const fs = require("fs")

const fichero = "json.json"
const obj = {
    name: "Erick",
    edad: 23,
    birthday: "9 de octubre",
    languages: ["javascript", "python", "php"]
}
//TRANSFORMAMOS EL OBJETO "OBJ" A UNA SINTAXIS QUE ENTIENDA EL FORMATO .JSON
let data = JSON.stringify(obj, null, 2)
//CREAMOS EL JSON QUE LLEVA LA INFORMACION DE DATA
fs.writeFileSync(fichero, data)

//LEEMOS EL FICHERO .JSON
let read = fs.readFileSync(fichero)
//LOS DATOS QUE EXTRAGIMOS DE LA FUNCION READ LOS TRANSFORMAMOS EN UNA SINTAXIS LEGIBLE
let object = JSON.parse(read)
console.log(object)

//BORRAMOS EL ARCHIVO .JSON
fs.unlinkSync(fichero)

