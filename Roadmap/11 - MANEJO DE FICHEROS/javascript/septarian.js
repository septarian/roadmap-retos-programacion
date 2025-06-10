// Manejo de ficheros
const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const fs = require("fs")
const file = "prueba.txt"

// //Crea un nuevo archivo
// fs.writeFile(file, "Hola camaradas", (err) => {
//     if(err){
//         console.log("Hubo un error" + (err))
//         return
//     }
//     console.log("creado con exito")
// })

// //Revisa si existe el archivo prueba.txt
// fs.access(file, (err) => {
//     if(err) {
//         console.log("El archivo no existe")
//         return
//     }
//     console.log("El archivo existe")
// })

// //copia el archivo si existe
// fs.copyFile(file, "copia.js", (err) => {
//     if(err){
//         console.log("algo salio mal")
//         return
//     }
//     console.log("copiado")
// })

// //añadiendo informacion a archivos
// fs.appendFile(file, "\nErick\n23\njavascript", (err) => {
//     if(err){
//         console.log("No se pudo añadir inormacion")
//         return
//     }
//     console.log("Archivo actualizado")
// })

// //Lee un archivo si existe
// fs.readFile(file, 'utf8', (err, data) => {
//     if(err){
//         console.log("No hay nada que leer")
//         return
//     }
//     console.log(data)
// })

// //Elimina un archivo
// fs.unlink(file, (err) => {
//     if(err){
//         console.log("no se pudo eliminar")
//         return
//     }
//     console.log("Eliminado con exito")
// })

//EXTRA
console.log("////////////////////EXTRA///////////////////////")

const fichero = 'extra.txt'
fs.writeFile(fichero, "", (err) => {
    if (err) throw "Error creando el fichero"
})

async function ventas() {

    rl.question('Elige que hacer ', (acc) => {
        switch (acc) {
            case "1":
                add()
                break
            case "2":
                query()
                break
            case "3":
                update()
                break
            case "4":
                del()
                break
            case "5":
                console.log("saliendo")
                rl.close()
                break
            default:
                console.log("opcion no valida")
                break
        }
    })
}

async function add() {
    try{
    rl.question("que prodcuto quieres añadir? ", async (names) => {
        rl.question("Cuantos de estos vendiste? ", async (sales) => {
            rl.question("Cuanto cuesta cada uno? ", async (price) => {
                fs.appendFile(fichero, `NOMBRE DEL PRODUCTO: ${names} | CUANTOS VENDIDOS: ${sales} | CUANTO CUESTA CADA UNO: ${price}\n`,(err) => {
                    if (err) throw "Error agregando producto"
                })
                await query()
                await ventas()
            })
        })
    })
    }catch(err){
        console.log("Hubo un error agregando el archivo ", err)
    }
}

async function query(){
    try{
        console.log(fs.readFileSync(fichero, 'utf8'))
        ventas()
    }catch(err){
        console.log("Ocurrio un error leyendo el archivo" + err.message)
    }
}

async function update(){
    try{
    rl.question("cual producto quieres actualizar: ", (producto) => {
        fs.readFileSync(fichero, 'utf8', (err, data) => {
            if(err) throw "Algo salio mal al leer el documento"
            const lines = data.split('\n')

            

        })
    })
    }catch(error){
        console.log("Error durante el proceso de actualizacion: ",error.message)
    }
}

ventas()