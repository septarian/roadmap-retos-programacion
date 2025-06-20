//test con expresiones regulares

/*expresiones regulares
    /\d/ Encuentra cualquier digito  EJEMPLO: '2' en 'B2'
    /\D/ Encuentra cualquier caracter que NO sea un digito   EJEMPLO: 'B' en 'B2'
    /\w/ Busca cualquier caracter alfanumerico del alfabeto latino basico    EJEMPLOS: 'M' EN 'MANZANA' - '5' EN '5.28'
    /\W/ Busca cualquier caracter que NO sea del alfabeto latino basico    EJEMPLO: '%' EN '50%'
    /\s/ Busca un solo caracter de espacio en blanco EJEMPLO: 'BAR' EN 'FOO BAR'
    /\S/ Busca un solo caracter que NO sea un espacio en blanco EJEMPLO: 'FOO' EN 'FOO BAR'
    /\^/ Coincide con el comienzo de la entrada EJEMPLO: /^A/ = 'A' EN 'AN APPLE'
    /\$/ Coincide con final de la entrada EJEMPLO: /a$/ = NO RECONOCE LA 'T' EN 'EATER' PERO SI EN 'EAT'
    Argumento g: Encuentra todas las coincidencias EJEMPLO: '/hi/g' EN 'hi there, hi again' = ["hi", hi] 
    Argumento i: Hace que la expresion regular ignore la distincion entre minusculas y mayusculas

*/

//Pruebas unitarias
function suma(a, b){
    if(typeof(a) === "number" && typeof(b) === "number"){
        return a + b
    }else{
        throw new Error("Deben ser numeros")
    }
}

const a = 10
const b = 5
console.log(suma(a, b))

function describe(){
    //Testeamos la funcion usando Jest
    test("suma de numeros 5 + 10 deberia ser 15", () => {
        expect(suma(10,5)).toBe(15)
    })
    test("suma de numeros -5 + -10 deberia ser 15", () => {
        expect(suma(-10,-5)).toBe(-15)
    })
    test("Lanza error si se pasan strings", () => {
        expect(() => suma("10","5").toThrow("Deben ser numeros "))
    })
}
//describe()

//EXTRA
function tested(){
    const arr = {
        name: "Erick",
        age: 23,
        birth_date: `09/10/2001`,
        programming_languages: ["javascript", "php", "python"],
    }

    test("Debe tener todos los campos", () => {
        expect(arr).toHaveProperty("name")
        expect(arr).toHaveProperty("age")
        expect(arr).toHaveProperty("birth_date")
        expect(arr).toHaveProperty("programming_languages")
    })
    test("Deben tener la informacion correcta", () => {
        expect(typeof arr.name).toBe('string')
        expect(typeof arr.age).toBe('number')
        expect(typeof arr.birth_date).toBe('string')
        expect(typeof arr.programming_languages).toBe('object')
    })
    test("No debe estar vacio", () => {
        expect(arr.name.length).toBeGreaterThan(0)
        expect(arr).not.toBeNull()
        expect(arr).not.toBeNaN()
        expect(arr).not.toBeUndefined()
        expect(arr.birth_date.length).toBeGreaterThan(0)
        expect(arr.programming_languages.length).toBeGreaterThan(0)
    })
}
tested()
