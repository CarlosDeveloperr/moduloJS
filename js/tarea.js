/**
 * 1:
 * Pedir al usuario estos 3 datos
 * - Nombre
 * - Peso actual
 * Calcular el peso que tendria esa persona en la luna
 * Imprimirlo en consola
 * ** Opcional -> Crear una función **
 */

// let nombre = window.prompt("Cual es tu nombre?")
// let pesoActual = window.prompt("Cual es tu peso actual?")

// console.log("tu nombre es: " +nombre+ " y tu peso es: "+pesoActual)

//  let pesoLuna = (pesoActual/9.81)*1622

//  console.log("El peso que tienes en la luna seria: "+pesoLuna)

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
//   var calificación = parseInt(window.prompt("Cual fue tu calificacion en el examen ?"))

//     if(calificación>=90)
//     console.log("Tu calificacion es 'A' ")
//     else if(calificación>=80 && calificación<90)
//     console.log("Tu calificacion es 'B'")
//     else if(calificación>=70 && calificación<80)
//     console.log("Tu calificacion es 'C'")
//     else if(calificación>=60 && calificación<70)
//     console.log("Tu calificacion es 'D'")
//     else if(calificación>=50 && calificación<60)
//     console.log("Tu calificacion es 'E'")

    /* 5:
    * Pedir al usuario el dia de la semana 
    * p.ej. lunes, martes, ...
    * Imprimir en consola el número del dia de la semana equivalente
    * es decir:
    * domingo -> 1, lunes -> 2, martes -> 3, etc...
    */
   
    // let Dia = window.prompt("Que dia de la semana es?")

    // if(Dia=='Lunes' || Dia=='lunes')
    // console.log("El dia lunes es el numero 1 de la semana")
    // else if(Dia=='Martes' || Dia=='martes')
    // console.log("El dia martes es el numero 2 de la semana")
    // else if(Dia=='Miercoles' || Dia=='miercoles')
    // console.log("El dia miercoles es el numero 3 de la semana")
    // else if(Dia=='Jueves'|| Dia=='jueves')
    // console.log("El dia jueves es el numero 4 de la semana")
    // else if(Dia=='Viernes'|| Dia=='viernes')
    // console.log("El dia viernes es el numero 5 de la semana")
    // else if(Dia=='Sabado' || Dia=='sabado')
    // console.log("El dia sabado es el numero 6 de la semana")
    // else if(Dia=='Domingo' || Dia=='domingo')
    // console.log("El dia domingo es el numero 7 de la semana")
    
    /* 6:
    * Pedir al usuario 2 numeros 
    * Imprimir en consola cual es el menor de los 2
    * Imprimir en consola cual es el mayor de los 2
    */

    var num = parseInt(window.prompt("Ingresa un numero "))
    var num2 = parseInt(window.prompt("Ingresa otro numero "))

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