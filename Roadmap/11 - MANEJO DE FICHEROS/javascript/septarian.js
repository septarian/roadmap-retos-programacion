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
// fs.writeFile(fichero, "", (err) => {
//     if (err) throw "Error creando el fichero"
// })

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
                ventas()

        }
    })
}

async function add() {
    try {
        rl.question("que prodcuto quieres añadir? ", (names) => {
            rl.question("Cuantos de estos vendiste? ", (sales) => {
                rl.question("Cuanto cuesta cada uno? ", (price) => {
                    fs.appendFile(fichero, `NOMBRE DEL PRODUCTO: ${names} | CUANTOS VENDIDOS: ${sales} | CUANTO CUESTA CADA UNO: ${price}\n`, (err) => {
                        if (err) throw "Error agregando producto" 
                    })
                    ventas()
                })
            })
        })
    } catch (err) {
        console.log("Hubo un error agregando el archivo ", err)
    }
}

async function query() {
    try {
        console.log(fs.readFileSync(fichero, 'utf8', ))
        ventas()
    } catch (err) {
        console.log("Ocurrio un error leyendo el archivo " + err.message)
    }
}

async function update() {
    try {
        rl.question("cual producto quieres actualizar: ", (producto) => {
            rl.question("Nuevo nombre: ", (newName) => {
                rl.question("Nuevas ventas: ", (newSales) => {
                    rl.question("Nuevo precio: ", (newPrice) => {
                        fs.readFile(fichero, 'utf8', (err, data) => {
                            if (err) throw "Algo salio mal al leer el documento"
                            const lines = data.split('\n')
                            let word = 0

                            for (let i of lines) {
                                word = i.split(' ')
                                if (word[3] === producto) {

                                    const index = lines.indexOf(i)
                                    lines[index] = `NOMBRE DEL PRODUCTO: ${newName} | CUANTOS VENDIDOS: ${newSales} | CUANTO CUESTA CADA UNO: ${newPrice}\n`
                                    let news = lines.join('\n')

                                    fs.writeFileSync(fichero, news)
                                    console.log("Actualizado con exito")
                                    ventas()

                                    break
                                } else {
                                    continue
                                }
                            }
                        })
                    })

                })
            })
        })
    } catch (error) {
        console.log("Error durante el proceso de actualizacion: ", error.message)
    }
}

ventas()