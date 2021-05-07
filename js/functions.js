console.log("Funciones")

// //definicion de la funcion
// function myFunction(params){
//     console.log('hola =)')
// }

// function getpi(){
//     console.log('getPi')
//     return 3.1416
// }

// let pi=getpi()
// myFunction()

/**
 * 1:
 * Pedir al usuario estos 3 datos
 * - Nombre
 * - Peso actual
 * Calcular el peso que tendria esa persona en la luna
 * Imprimirlo en consola
 * ** Opcional -> Crear una función **
 */ 

let pesoActual = window.prompt("Cual es tu peso actual?")
pesoEnLaLuna(pesoActual)

function pesoEnLaLuna(pesoTierra){
    let nombre = window.prompt("Cual es tu nombre astronauta?")
    console.log("tu nombre es: " +nombre+ " y tu peso es: "+pesoActual)
     let pesoLuna = (pesoActual/9.81)*1622
    console.log("El peso que tienes en la luna seria: "+pesoLuna)
}




 /**
 * 2:
 * Pedir al usuario la calificación de un examen ( 0 a 100)  por el prompt
 * Imprimir en consola las equivalencias en letra su calificación, es decir
 * -> si es mayor o igual a 90, imprimir "A"
 * -> si es mayor o igual a 80 y menor que 90 , imprimir "B"
 * -> si es mayor o igual a 70 y menor que 80 , imprimir "C"
 * -> si es mayor o igual a 60 y menor que 70 , imprimir "D"
 * -> si es mayor o igual a 50 y menor que 60 , imprimir "E"
 * -> si es menor 50 , imprimir "F"
 */
   let calif = parseInt(window.prompt("Cual fue tu calificacion en el examen ?"))
   LetraCalif(calif)

   function LetraCalif(calif){
    if(calif>=90)
    console.log("Tu calificacion es 'A' ")
    else if(calif>=80 && calif<90)
    console.log("Tu calificacion es 'B'")
    else if(calif>=70 && calif<80)
    console.log("Tu calificacion es 'C'")
    else if(calif>=60 && calif<70)
    console.log("Tu calificacion es 'D'")
    else if(calif>=50 && calif<60)
    console.log("Tu calificacion es 'E'")
    else
    console.log("Tu calificacion es 'F'")
      
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
let letra
function lastLetter(nombre)
{
    let ultimaLetra=nombre[nombre.length - 1].toLowerCase();
    if(ultimaLetra=='a' || ultimaLetra=='e' || ultimaLetra=='i' || ultimaLetra=='o' || ultimaLetra=='u'){
    console.log(`Tu nombre termina con  vocal `)
    return ultimaLetra
    }
    else
    {
    console.log(`Tu nombre termina con consonante `)
    return ultimaLetra
    }
}
letra=lastLetter(nombre)
console.log(`Tu nombre termina con la letra ${letra}`)

 /**
 * Dado los siguientes 2 strings
 * 'smtp'
 * 'aeiou'
 * Imprimir en consola las siguientes combinaciones
 * -> sa, se, si, so , su 
 * -> ma, me, mi, mo , mu 
 * -> ta, te, ti, to , tu 
 * -> pa, pe, pi, po , pu
 */

  let primerAray='smtp'
  let segundoArray='aeiou'
  let concatenacion=''
 Union(primerAray,segundoArray)

  function Union(primerAray,segundoArray)
  {
       console.log("Tu combinaciones son:\n")
  for(let i=0;i<=segundoArray.length;i++){
      for(let j=0;j<=primerAray.length;j++){
         concatenacion+=primerAray.substr(i,1) + segundoArray.substr(j,1) + ','
      }
      console.log(concatenacion)
      concatenacion=' '
    }
  }
 


    /* 5:
    * Pedir al usuario 2 numeros 
    * Imprimir en consola cual es el menor de los 2
    * Imprimir en consola cual es el mayor de los 2
    */
     var num = parseInt(window.prompt("Ingresa un numero "))
     var num2 = parseInt(window.prompt("Ingresa otro numero "))
    
     comparacionDosNumeros(num,num2)
    function comparacionDosNumeros(num,num2)
{
    if(num<num2)
    {
    mayor=num2
    menor=num
    console.log("El numero mayor es: " +mayor+" el numero menor es: "+menor)
    }
    else if(num>num2)
    {
    mayor=num
    menor=num2
    console.log("El numero mayor es: " +mayor+" el numero menor es: "+menor)
    }
    else if(num==num2)
    console.log("Son iguales los numeros")
}

  
 