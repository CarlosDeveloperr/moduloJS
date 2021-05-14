//Ejercicio 1
// funcion que dado un array
// genere un nuevo array con los mismos numeros como strings
let arrayAux = [];
let valor = [];
let arrayAux1 = [];
let valor1 = [];
function stringItUp(arr) {
  arr.forEach((element) => {
    arrayAux.push(element.toString());
  });
  return arrayAux;
}
valor = stringItUp([2, 5, 100]);
console.log(valor);
// ["2", "5", "100"]

//Ejercicio 2
function capitalizeNames(arr) {
  arr.forEach((element) => {
    // element = element.toLowerCase();
    // element[0] = element[0].toUpperCase();
    // console.log("palabra modificada: " + element[0]);
    arrayAux1.push(element.toLowerCase());
  });
  return arrayAux1;
}

valor1 = capitalizeNames(["jorge", "antOnio", "jUan", "victor"]);
console.log(valor1);
// ["Jorge", "Antonio", "Juan", "Victor"]

//Ejercicio 3
// Dados 2 arrays
// array de nombres
// array de apellidos
// Crear una funcion que reciba los 2 arrays,
// y retorne un array con los nombres completos
const joinNames = (arrNames, arrSurnames) => {
  //
  // joinNames.map((value, index) => {
  //   let fullname = `${value} ${arrSurnames[index]}`;
  //   return fullname;
  // });

  return arrNames.map((value, index) => `${value} ${arrSurnames[index]}`);
};
console.log(joinNames(["jorge", "luis"], ["camarillo", "cristobal"]));
// ["jorge camarillo ", "luis cristobal"]

/******************************* */
const stringConcat = (arr) => arr.reduce((acc, cv) => acc + cv, "");

let resStringconcat = stringConcat([1, 2, 3]);
console.log(resStringconcat);
// "123"

//********************************************* */
const totalShoppingCart = (arr) => arr.reduce((acc, cv) => acc + cv[1], 0);

// const totalShoppingCart = (arr) =>{
// let response=arr.reduce((acc, cv) =>{
//         return acc + cv[1]
// }, 0)
// return response
// }

let arr = [
  ["Reloj", 500],
  ["Reloj", 300],
  ["Reloj", 1200],
];
const totalAPagar = totalShoppingCart(arr);
console.log("El total a pagar es: " + totalAPagar);
// 2000
