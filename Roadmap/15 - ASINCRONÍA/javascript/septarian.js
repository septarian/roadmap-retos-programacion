//funcion asincrona

function asincrono(name, time){
    console.log(`iniciando funcion ${name}`)
    console.log(`tardara ${time} segundos`)

    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`finalizando funcion ${name}`)
            resolve()
        }, time * 1000)
    })
    //El resolve es el resultado
    // promesa.then( resultado => {
    //     console.log(resultado)
    // })
    return promesa
}
asincrono("asincrono", 9)

//EXTRA
async function extra () {
    await Promise.all([
        asincrono("funcion C", 3),
        asincrono("funcion B", 2),
        asincrono("funcion A", 1),
    ])
    
    await asincrono("funcion D", 1)
}
extra()