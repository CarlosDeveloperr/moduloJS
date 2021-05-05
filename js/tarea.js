// 1:
// Pedir al usuario un numero entre 1 y 12
// Imprimir en consola el numero de días que corresponden a ese mes y su nombre
// p.ej.
// --> El mes 5 (Mayo) tiene 31 días
let mes=parseInt(window.prompt('Dame el numero de mes que quieres saber el numero de dias que tiene...'))
switch (mes) {
	case 1:
	console.log('El mes 1 (Enero) tiene 31 días')
	break
	case 2:
    console.log('El mes 2 (Febrero) tiene 28 días')
	break
	case 3:
        console.log('El mes 3 (Marzo) tiene 31 días')
	break
	case 4:
        console.log('El mes 4 (Abril) tiene 30 días')
	break
	case 5:
        console.log('El mes 5 (Mayo) tiene 31 días')
	break
	case 6:
        console.log('El mes 6 (Junio) tiene 30 días')
	break
    case 6:
        console.log('El mes 7 (Julio) tiene 31 días')
	break
    case 8:
        console.log('El mes 8 (Agosto) tiene 31 días')
    break
    case 9:
        console.log('El mes 9 (Septiembre) tiene 30 días')
    break
    case 10:
        console.log('El mes 10 (Octubre) tiene 31 días')
    break
    case 11:
        console.log('El mes 11 (Noviembre) tiene 30 días')
    break
    case 12:
        console.log('El mes 12 (Diciembre) tiene 31 días')
    break
	default:
		console.log('Ese mes no existe')
}

/**
 * 2:
 * Pedir al usuario que indique como esta su día
 * Opciones: Nublado, Soleado, Lluvioso, Nevado
 * Si escribe alguna de ellas, colocar un mensaje 
 * P.ej: soleado -> oh!, que buen clima para estar en la playa
 * P.ej: nevado -> oh!, que buen clima para estar en casa
 *  etc...
 * Sino
 * Pedir por prompt, Que describa que le gustaria hacer en su día
 */
let opinionUsuario = window.prompt('Como esta el clima en tu Region\n1. Nublado\n2. Soleado\n3. Lluvioso\n4. Nevado')
switch(opinionUsuario){
    case 1:
    console.log('oh!, que buen clima para un maraton de series')
    break
    case 2:
    console.log('oh!, que buen clima para estar en la playa')
    break
    case 3:
    console.log('oh!, lluvia que hermoso !!')
    break
    case 4:
    console.log('oh!, que buen clima para estar en casa')
    break
    default:
        window.prompt("Describeme lo que te gustaria hacer en tu dia")
}

/**
 * 3:
 * Pedir el nombre de una persona
 * Verificar si el nombre termina con una vocal
 * imprimir que `Tu nombre termina con ${vocal}`
 * Sino
 * imprimir que `Tu nombre termina con ${consonante}`
 * -> Pedro
 * -> `Tu nombre termina con o`
 */

let nombre = window.prompt("Dame un nombre")
let ultimaLetra=nombre[nombre.length - 1].toLowerCase();
if(ultimaLetra=='a' || ultimaLetra=='e' || ultimaLetra=='i' || ultimaLetra=='o' || ultimaLetra=='u')
console.log(`Tu nombre termina con ${ultimaLetra}`)
else
{
console.log(`Tu nombre termina con ${ultimaLetra}`)
}


/**
 * 4:
 * Pedir el nombre de una persona
 * Imprimir el nombre de la persona al revés y en mayúsculas
 * P.ej: juan
 * -> NAUJ
 */
 const invertirCadena = cadena => cadena.split("").reverse().join("");
 
 let cadena =  window.prompt("Dame un nombre");
 console.log("Cadena:", invertirCadena(cadena));

/**
 * Pedir una palabra por promt
 * Pedir un número entre 1 y 10
 * Duplicar esa cantidad de veces esa palabra e imprimir en consola
 * P.ej: 
 * "Kodemia"
 * 4
 * -> "Kodemia Kodemia Kodemia Kodemia"
 */

let numeroVeces = window.prompt("Cuantas veces quieres duplicar la parada")
let nombre4 = window.prompt("Dame un nombre")

alert(nombre4.repeat(numeroVeces))

