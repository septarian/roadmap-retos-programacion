const fs = require("fs")
const xml2js = require("xml2js")

const fichero = "json.json"
const ficheroxml = "xml.xml"

const obj = {
    name: "Erick",
    age: 23,
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

//OTRA FORMA DE LEER EL FICHERO .JSON
let req = require(`./${fichero}`)
console.log(req)

//BORRAMOS EL ARCHIVO .JSON
fs.unlinkSync(fichero)

//////////////////XML////////////////////

//CREAMOS UN OBJETO XML
const dataxml = `
<name>${obj.name}</name>
<age>${obj.age}</age>
<date>${obj.birthday}</date>
<languages>
${
    obj.languages.map(language => `\t<item>${language}</item>`).join('\n')
}
</languages>
`

//CREAMOS EL FICHERO XML
fs.writeFileSync(ficheroxml, dataxml)
//LEEMOS EL ARCHIVO.XML
const readxml = fs.readFileSync(ficheroxml, 'utf8')
console.log(readxml)

//BORRAMOS EL ARCHIVO XML
fs.unlinkSync(ficheroxml)

//EXTRA
console.log("//////////////EXTRA////////////////////")

const pro_json = "programador.json"
const objeto = {
    name: "johnny",
    age: "23",
    birthday: "20 de abril",
    languages: ['python', 'php', 'javascript']
}

class Persona {
    constructor(name, age, birthday, languages){
        this.name = name
        this.age = age
        this.birthday = birthday
        this.languages = languages
    }
}

//JSON
const objeto_j = JSON.stringify(objeto)
fs.writeFileSync(pro_json, objeto_j)

const data_json = fs.readFileSync(pro_json)
const objeto_json = JSON.parse(data_json)

const programmer = new Persona(objeto_json.name, objeto_json.age, objeto_json.birthday, objeto.languages)
console.log(programmer)
fs.unlinkSync(pro_json)

//XML
const pro_xml = "programador.xml"
const eti = Object.keys(objeto)
const objeto_x = `
<root>
<${eti[0]}>${objeto.name}</${eti[0]}>
<${eti[1]}>${objeto.age}</${eti[1]}>
<${eti[2]}>${objeto.birthday}</${eti[2]}>
<${eti[3]}> 
${
    objeto.languages.map(language => `\t<item>${language}</item>`).join('\n')
} 
</${eti[3]}>
</root>
`
//Se crea el archivo
fs.writeFileSync(pro_xml, objeto_x)
//Leer y parsear XML
const data_xml = fs.readFileSync(pro_xml, 'utf8')
const parser = new xml2js.Parser()


parser.parseString(data_xml, (err, result) => {
  if (err) {
    console.error("Error al parsear XML:", err);
    return;
  }

  // Acceder a los datos convertidos
  const datos = result.root;
  const nombre = datos[eti[0]][0];
  const edad = datos[eti[1]][0];
  const cumple = datos[eti[2]][0];
  const lenguajes = datos[eti[3]][0].item;

  const programmer2 = new Persona(nombre, edad, cumple, lenguajes);
  console.log(programmer2);
});

fs.unlinkSync(pro_xml)