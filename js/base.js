console.log('Hello World')
/*
	Ejercicio 1:
	Pedir 2 variables por prompt
	Si a > b dividir a entre b
	Si a < b dividir sumar a más b
	si a == b multiplicar ambos numeros
	Imprimir el resultado en consola
*/  


var a = parseInt(window.prompt("Dime un numero que sera el valor a"));
var b = parseInt(window.prompt("Dime otro numero que sera el valor de b"));
let c
console.log(a);
console.log(b);

if (a>b)

 c=a/b
else if (a < b) 
{
 c =a+b
}
else if(a===b)
{
c=a*b
}
console.log(c);

/*Ejercicio 2*/
/***
	Pedir por el promt un numero, y comprobar si es par o impar
*/

  var numero;
  numero=parseInt(window.prompt('Ingrese valor del numero:',''));
  if (numero % 2 == 0)
  {
    document.write('El numero introducido es par');
  }
  else {
      document.write('El numero introducido es impar');
    }