/**
 * For
 * Escribir un programa de arroje la suma de los multiplos de 3, 5 o 7 que hay entre 1 y 100
 * 
 */

//  var datos=[3,5,7];
//  var maximo =100;
//  var aux=[];
 
 
//   for (var i =0; i<maximo; i++) 
//   {
//       for (var j = 0; j < datos.length; j++) 
//       {
//           if (i%datos[j]==0)
//           {
//               aux.push(i);
//               document.write(i+", ");
//           }
//       }
//   }

//    var acum =0;
//   for ( i = 0; i<aux.length; i++) 
//   {
//       acum= acum+aux[i];
//   }
//   document.write("La suma de los numeros multiplos de 3,5 y 7 es: "+acum);

 /**
  * While
  * Escribir un programa que le pida al usuario un numero
  * que imprima en consola el numero dado si es positivo
  * si el numero es negativo, salir del ciclo
  * 
  */
//  let num=parseInt(window.prompt("Dame un numero , por favor"))
//   while(num>0){
//          console.log(`Tu numero es: ${num}`)
//         num=parseInt(window.prompt("Dame otro numero , por favor"))
//   }

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
 console.log("Tu combinaciones son:\n")
 for(let i=0;i<=segundoArray.length;i++){
     for(let j=0;j<=primerAray.length;j++){
        concatenacion+=primerAray.substr(i,1) + segundoArray.substr(j,1) + ','
     }
     console.log(concatenacion)
     concatenacion=' '
 }