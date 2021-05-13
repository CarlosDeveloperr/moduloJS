// Metodos de array

/*
Escribir una funcion que tome como parametro un array de numeros e imprima en
consola el array al revés
arrayReverse([1,2,3,4]). 
-> [4,3,2,1]
*/
let array1 = [1, 2, 3, 4];
let array2 = "";
const alreves = (array1) => (array2 = array1.reverse());
console.log(`Tu array al reves es:${array2}`);

/*
Escribir una funcion que tome como parametro 2 arrays, y devuelva un numero 
con la suma total de esos 2 arrays.
arrayReduce([1,2,3,4],[1,2]). 
-> 13
*/
let arrayOne;
let arrayTwo;
let arrayConcat = arrayOne.concat(arrayTwo);
let suma = 0;

arrayConcat.forEach((item) => {
  suma += item;
});

console.log(suma);

/*
Escribir una función que tome como parametro 2 arrays, y devuelva un array 
con los numeros repetidos en los 2 arrays
arrayReduce([1,2,3,4],[1,2]). 
-> [1,2]
*/
