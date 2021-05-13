/**
 * 1:
 * Estudiar los metodos
 * .map()
 * .reduce()
 */

/**
 * Ejercicio 1:
 * Realizar una funcion que dado un array de strings como parametro
 * retorne un nuevo array con todos los strings que tienen como maximo 5 caracteres
 */

let nuevoArray = [];
const fiveCharactersOnly = (arr) => {
  arr.forEach((item, index) => {
    // console.log(item);
    if (item.length <= 5) {
      nuevoArray[index] = item;
    }
  });
  return nuevoArray;
};

// const fiveCharactersOnly = (arr) => {
//   arr.forEach((item, index) =>item.length <= 5 ? nuevoArray[index] = item : '')
//   return nuevoArray;
// };

// test
let responseFiveCharacters = fiveCharactersOnly([
  "dog",
  "wolf",
  "family",
  "eaten",
  "camping",
]);

console.log("Las palabras con 5 caracteres son: " + responseFiveCharacters);
// [ "dog", "wolf", "eaten"]

/****************************************************************************
 * Ejericio 2:
 * Realizar una funcion que dado un array de nombres de koders como parametro
 * Retorne un nuevo array con todos koders que tienen mas de 1 nombre
 *
 */

const twoNamesKoders = (arr) => arr.filter((item) => item.includes(" "));

// test
let responseTwoNamesKoders = twoNamesKoders([
  "Antonio",
  "Victor Yair",
  "Luis Carlos",
  "Victor",
  "José Omar",
]);
// ["Victor Yair", "Luis Carlos", "José Omar"]
console.log(
  "Las personas que tienen mas de 2 nombres son: " + responseTwoNamesKoders
);
