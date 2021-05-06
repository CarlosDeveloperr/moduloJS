console.log('Metodos de sting y ciclos')



/**
 * Pedir al usuario usuario un numero entre 1 y 10
 * Imprimir la tabla de multiplicar de ese número
 * p.ej. 
 * 3 x 1 = 3
 * 3 x 2 = 6
 */
// let numero= parseInt(window.prompt("Que numero deseas?"))
// let i=1
// console.log(`La tabla es del ${numero}\n`)
// while(i<=10){
//     let resultado=numero*i
//    console.log(`${numero}*${i} = ${resultado}`);
//    i++
// }

// for(let i=1;i<=10;i++){
//     let resultado=numero*i
//     console.log(`${numero}*${i}= ${resultado}`);
// }


/**
 * Pedir al usuario una oracion
 * Imprimir un string con todas las vocales
 * Imprimir un string con todas las consonantes
 * 
 */
//  let oracion=window.prompt("Dame una oracion")
//  let vocales=""
//  let consonantes=""
// //  carlos
// for(i=0;i<=oracion.length-1;i++){
//     if(oracion[i]!==' ' || oracion[i]!==',' || oracion[i]!=='.'){
//         if(oracion[i]=='a' || oracion[i]=='e'|| oracion[i]=='i' || oracion[i]=='o' || oracion[i]=='u' 
//             || oracion[i]=='A' || oracion[i]=='E'|| oracion[i]=='I' || oracion[i]=='O' || oracion[i]=='U' )
//         {
//             vocales+=oracion[i]
            
//         }
//         else{
//             consonantes+=oracion[i]
//         }
//     }
//  }
//  console.log(vocales)
//  console.log(consonantes)

/**
 * Pedir el usuario un numero entre 10 y 100
 * Imprimir todos los numeros pares que existen entre 1 y ese numero
 */

let num=parseInt(window.prompt("Dame el numero que quieres saber sus pares entre 10-100"))
let i=1
while(i<=num){
    if(i%2==0){
    console.log(` El numero ${i} es par`)
             }
    i++
}
// for(i=1;i<=num;i++){
//     if(i%2==0){
//         console.log(` El numero ${i} es par`)
//     }
// }