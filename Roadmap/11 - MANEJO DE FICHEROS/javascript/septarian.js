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
//Se puede inicializar con appendfile en lugar de writefile para evitar que el fichero se sobreescriba cuando se inicia el programa
fs.appendFile(fichero, "", (err) => {
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
                calculate()
                break
            case "6":
                calculateAll()
                break
            case "7":
                console.log("saliendo y borrando el fichero... ")
                fs.unlinkSync(fichero)
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
        console.log(fs.readFileSync(fichero, 'utf8',))
        ventas()
    } catch (err) {
        console.log("Ocurrio un error leyendo el archivo: " + err.message)
    }
}

async function update() {
    try {
        rl.question("cual producto quieres actualizar: ", (producto) => {
            rl.question("Nuevo nombre: ", (newName) => {
                rl.question("Nuevas ventas: ", (newSales) => {
                    rl.question("Nuevo precio: ", (newPrice) => {
                        fs.readFile(fichero, 'utf8', (err, data) => {
                            if (err) throw "Algo salio mal al leer el documento: " + err
                            const lines = data.split('\n')
                            let found = false
                            let word = 0

                            for (let i of lines) {
                                word = i.split(' ')
                                if (word[3] === producto) {

                                    const index = lines.indexOf(i)
                                    lines[index] = `NOMBRE DEL PRODUCTO: ${newName} | CUANTOS VENDIDOS: ${newSales} | CUANTO CUESTA CADA UNO: ${newPrice}\n`
                                    let news = lines.join('\n')

                                    fs.writeFileSync(fichero, news)
                                    console.log("Actualizado con exito")
                                    found = true
                                    ventas()

                                    break
                                }
                            }
                            if (found === false) {
                                console.log("No se encontro el producto, regresando al menu... ")
                                ventas()
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

async function del() {
    try {
        rl.question("Cual producto quieres eliminar? ", (producto) => {
            fs.readFile(fichero, 'utf8', (err, data) => {
                if (err) throw "Algo salio mal al buscar el producto: " + err

                const lines = data.split('\n')
                let found = false
                word = 0

                for (let i of lines) {
                    word = i.split(' ')
                    if (word[3] === producto) {

                        let index = lines.indexOf(i)
                        lines.splice(index, 1)
                        let news = lines.join('\n')

                        fs.writeFileSync(fichero, news)
                        console.log("Producto borrado con exito")
                        found = true
                        ventas()

                        break
                    }
                }
                if (found === false) {
                    console.log("El producto no existe, volviendo al menu...")
                    ventas()
                }
            })
        })
    } catch (err) {
        console.log("Algo salio mal eliminando el producto " + err)
    }
}

async function calculate() {
    try {
        rl.question("de cual producto quieres calcular la venta ", (producto) => {
            fs.readFile(fichero, 'utf8', (err, data) => {
                const lines = data.split('\n')
                let found = false
                let word = 0

                for (let i of lines) {
                    word = i.split(' ')
                    if (word[3] === producto) {
                        let cal = word[7] * word[13]
                        console.log("El total de ingresos por este producto fue de: " + cal + "$")
                        found = true
                        ventas()

                        break
                    }
                }
                if (found === false) {
                    console.log("Producto no encontrado, regresando al menu... ")
                    ventas()
                }
            })
        })
    } catch (err) {
        console.log("Hubo un error al querer hacer el calculo de este producto: " + err)
    }
}

async function calculateAll() {
    try {
        fs.readFile(fichero, 'utf8', (err, data) => {
            if (err) throw "Error al calcular todos los productos: " + err
            const lines = data.split('\n')
            let word = 0
            let total = 0
            let cal = 0


            for (let i of lines) {
                word = i.split(' ')
                if (word[7] !== NaN && word[13] !== undefined) {
                    cal = word[7] * word[13]
                    total += cal
                }
            }
            console.log("El total de todos los ingresos es de: " + total + "$")
            ventas()
        })

    } catch (err) {
        console.log("Hubo un error al querer hacer el calculo de este producto: " + err)
    }
}

ventas()