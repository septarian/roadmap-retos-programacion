//peticiones http
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

//GET: RECUPERA DATOS
//HEAD: UNA PETICION IDENTICA A GET, PERO SIN EL CUERPO DE LA RESPUESTA
//POST: ENVIA UNA ENTIDAD O RECURSO EN ESPECIFICO
//PUT: El modo PUT reemplaza todas las representaciones actuales del recurso de destino con la carga útil de la petición.
//DELETE: ELIMINA UN RECURSO EN ESPECIFICO
//CONNECT: El método CONNECT establece un túnel hacia el servidor identificado por el recurso.
//OPTIONS: El método OPTIONS es utilizado para describir las opciones de comunicación para el recurso de destino.
//TRACE: El método TRACE realiza una prueba de bucle de retorno de mensaje a lo largo de la ruta al recurso de destino.
//PATCH: El método PATCH es utilizado para aplicar modificaciones parciales a un recurso.

//AJAX (solo funciona en navegador)
function navegadorOnly(){
    http = new XMLHttpRequest()
    const url = "https://jsonplaceholder.typicode.com/users"
    //utilizamos open para unir el metodo http (en este caso GET) y usar send para enviar la solicitud
    http.open('GET', url)
    http.send()

    http.onreadystatechange = (e) => {
    console.log(http.responseText)
    }
}
//FETCH
function api(){
    const url = "https://jsonplaceholder.typicode.com/users/1"
    //una manera
    // fetch(url_fetch)
    // .then((data => {return data.json()}))
    // .then((res=>{console.log(res)}))
    fetch(url, {
        method: 'GET'
    })
    //obtiene la informacion en formato json
    .then(data => { 
        //verifique que la peticion no tenga errores
        if(!data.ok){
            throw new Error("No a funcionado la peticion")
        }
        return data.json()
    })
    //procesa la informacion
    .then(res => console.log(res.id))
    .catch((error => console.log(error)))
}


//EXTRA
function pokemon(){
    rl.question("Que pokemon quieres buscar: ", (res) => {
        if(res === '') throw new Error("Debes escribir un nombre")

        const link = `https://pokeapi.co/api/v2/pokemon/${res}`
        fetch(link)
        .then(data => {
            if(!data.ok) throw new Error("Pokemon no encontrado")
            return data.json()
        })
        .then(res => {
            console.log("Nombre:",res.name)
            console.log("id:",res.id)
            console.log(res.weight,"kilos")
            console.log(res.height,"pies")
            console.log("Lista de tipos:")
            res.types?.map((e) => {
                console.log(`   -Tipo: ${e.type.name}`)
            })
            console.log("Juegos en los que aparece:")
            res.game_indices.map((e) => {
                console.log(`   -Edicion: ${e.version.name}`)
            })

        })
        .catch(error => console.log(error))
        rl.close()
    })
}

pokemon()