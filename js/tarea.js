// Resolver 4 y 5 con For y While

/**
 * 4:
 * Pedir el usuario una oracion
 * Imprimir en consola si una oración es un palindromo (puede contener espacios)
 * p.ej. anita lava la tina 
 * -> La oración "anita lava la tina" es un palindromo
 */
 var palabra=prompt("Escribe una palabra").toLowerCase();
 var bandera
 // eliminamos los espacios en blanco
 palabra=palabra.replace(g, "");

 for (var i=0;i<palabra.length;i++){
     if(palabra[i]!=palabra[palabra.length-i-1]){
         bandera=0
     }
 }
 bandera=1;
}

if(bandera==1)
{
 alert("Esto es palíndromo");
}else{
 alert("Esto no es palíndromo")
}
/**
 * 5:
 * pedir el usuario un numero entre 1 y 10
 * Imprimir en consola el siguiente patrón
 * donde la cantidad mas grande de * es el Numero del usuario
 * P.ej. el usuario introduce 5 
 * Resultado esperado
 *
 **
 ***
 ****
 *****
 ****
 ***
 **
 *
*/