console.log('Condicionales y Métodos de string')


/**
 * 
 * Pedir 3 numeros por le promt
 * Imprimir en consola cual es el numero mas grande de los 3
 *
 */

// const numberOne = parseInt(window.prompt('Dame un numero'))
// const numberTwo = parseInt(window.prompt('Dame un numero'))
// const numberThree = parseInt(window.prompt('Dame un numero'))
// if (numberOne > numberTwo && numberOne > numberThree) {
// 	console.log(`El número ${numberOne} es el mayor`)
// } else if (numberTwo > numberOne && numberTwo > numberThree) {
// 	console.log(`El número ${numberTwo} es el mayor`)
// } else if (numberThree > numberOne && numberThree > numberTwo) {
// 	console.log(`El número ${numberThree} es el mayor`)
// } else {
// 	console.log(`Todos los numeros son iguales`)
// }

/**
 * 
 * Pedir al usuario 2 números (a y  b)
 * Comprobar si “a” es mayor o menor que “b”
 * Imprimir en consola el resultado
 * P.ej:  5 es menor que 6
 * 
 */

// let numberA = parseInt(window.prompt('Dame el numero 1'))
// let numberB = parseInt(window.prompt('Dame el numero 2'))
// numberA > numberB ? console.log(`${a} es mayor que ${b}`) : console.log(`${a} es menor que ${b}`)


/**
 * 
 * Pedir una calificación por promt
 * si es 100 -> A+
 * si es 90 -> A
 * si es 80 -> B
 * si es 70 -> C
 * si es 60 -> D
 * si es 50 -> E
 * si es 40 -> F
 * Imprimir en consola -> tu calificación es un A, b, c ...
 * 
 */

// let score = parseInt(window.prompt('Cual fue la calificación de tu examen'))
// switch (score) {
// 	case 100:
// 		console.log('tu califiación es un A+')
// 		break
// 	case 90:
// 		console.log('tu califiación es un A')
// 		break
// 	case 80:
// 		console.log('tu califiación es un B')
// 		break
// 	case 70:
// 		console.log('tu califiación es un C')
// 		break
// 	case 60:
// 		console.log('tu califiación es un D')
// 		break
// 	case 50:
// 		console.log('tu califiación es un E')
// 		break
// 	default:
// 		console.log('tu califiación es un F')
// }




/**
 * 
 * Propiedades de string
 * Métodos de string
 *
 */

// Propiedad length
// sintaxis "string".length

let saludo = "Hola mundo"
console.log(saludo.length)

// Métodos

// string.split(separator, limit)
let resulSplit = saludo.split(' ')
console.log(resulSplit)
// -> ["Hola", "mundo"]

// string.concat(string1, string2, ..., stringX)
const str1 = "Hola "
const str2 = "Mundo!"
let resConcat = str1.concat(str2)
// -> "Hola Mundo"

// string.replace(searchvalue, newvalue)
var strToReplace = "Visit México!"
var resReplace = strToReplace.replace("México", "Kodemia")
// -> "Visit Kodemia!"