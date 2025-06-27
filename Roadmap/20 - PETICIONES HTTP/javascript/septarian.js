//peticiones http

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
const url = "https://jsonplaceholder.typicode.com/users/1"
//una manera
// fetch(url_fetch)
// .then((data => {return data.json()}))
// .then((res=>{console.log(res)}))
fetch(url, {
    method: 'GET'
})
//obtiene la informacion en formato json
.then((data) => data.json())
//procesa la informacion
.then(res => console.log(res.id))
.catch((error => console.log(error)))
