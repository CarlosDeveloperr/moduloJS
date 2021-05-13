// Ejercicio 1 .forEach()
// Dado un array con solo números
// obtener el segundo valor mas alto
// input: [1,4,3,2,5]
// output: -> 5

let numero = [1, 4, 3, 2, 5];
let mayor = numero[0];

//Funcion normal
// numero.forEach(function (numero) {
//   if (numero > mayor) {
//     console.log("Anterior mayor: " + mayor + ", nuevo mayor: " + numero);
//     mayor = numero;
//   }
// });

//ArrowFunction
numero.forEach((numero) => {
  if (numero > mayor) {
    // console.log("Anterior mayor: " + mayor + ", nuevo mayor: " + numero);
    mayor = numero;
  }
});
console.log("El numero mayor es: " + mayor);

////Funcion metida en una variable
// const convertidor = numero.forEach((numero) => {
//   if (numero > mayor) {
//     // console.log("Anterior mayor: " + mayor + ", nuevo mayor: " + numero);
//     mayor = numero;
//   }
// });
// console.log("El numero mayor es: " + mayor);

//**************************************************************** */
// ejercicio 2 .forEach() o .map() o for()
// función
// convertir todos los elementos numericos de un array
// a strings
// input: [1,2,3,4,5]
// output -> ['1,','2','3','4','5']

let numericos = [1, 2, 3, 4, 5];
let nuevoArray = [];
//funcion normal
// numericos.forEach(function (numero, index) {
//   let nuevoItem = numero.toString();
//   nuevoArray[index] = nuevoItem;
// });

/* //ArrowFunctions
numericos.forEach((numero, index) => {
  let nuevoItem = numero.toString();
  nuevoArray[index] = nuevoItem;
});
console.log(nuevoArray); */

// Funcion con variable
const convertirString = numericos.forEach((numero, index) => {
  let nuevoItem = numero.toString();
  nuevoArray[index] = nuevoItem;
});
console.log(nuevoArray);

//***************************************************************************** */
// ejercicio 3 funcion que dados 2 parametros .forEach() o .map() o for()
// p1 = año de inicio
// p2 = año de fin
// y devuelva un array con los años que son bisiestos
// que se encuentran en ese rango
// [1990, 2000, 2001, 2020]
// -> [2000,2020]
const convertLeapYear = (startYear, endYear) => {
  let filteredYears = [];
  for (let year = startYear; year <= endYear; year++) {
    if (
      (year % 4 === 0 && year % 100 !== 0) ||
      (year % 100 === 0 && year % 400 === 0)
    ) {
      filteredYears.push(year);
    }
  }

  return filteredYears;
};

//Filter
