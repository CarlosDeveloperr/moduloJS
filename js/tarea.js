/**
 * 
 * Ejercicio 1
 
Dado el array [ ["jorge", false] , ["luis", true] , ["Victor", false] ] 
Calcular el numero de personas que si votaron
Output -> 1
Nota: las personas que si votaron tiene true
*/
let arrayAux = [];
//solucion Normal
const totalVoters = (arr) => {
  let response = arr.reduce((acumulador, valorActual) => {
    console.log(acumulador, valorActual);
    if (valorActual[1] === true) {
      arrayAux.push(valorActual[0]);
      acumulador++;
    }
    return acumulador;
  }, 0);
  return response;
};
//solucion Reducida

// const votadoresTotales = totalVoters([
//   ["Jorge", false],
//   ["Hector", true],
//   ["Daniela", true],
//   ["Luis", true],
//   ["Victor", false],
// ]);
console.log("Votadores totales: " + votadoresTotales);
console.log("Las personas que votaron fueron: " + arrayAux);
// -> 1

/**
* 
* Ejercicio 2

  Dado un array con pedidos de un restaurant
  la estructura por cada pedido es 
  ['entrada','principal','postre','precio'],
 
  Funcion que devuelve el total de pedidos que tienen como plato principal "paella"
  Funcion que devuelve los pedidos que tienen como postre "platano" o "helado" 
  Funcion que devuelve los pedidos que tengan un precio superior a 90 
  Funcion que devuelve los pedidos que tengan un precio menor a 90 
*/
let pedidos = [
  ["ensalada de pepinos", "paella", "platano", 100],
  ["ensalada de tomates", "pescado", "helado", 120],
  ["ensalada simple", "paella", "yogurt", 80],
  ["ensalada simple", "enchiladas", "yogurt", 80],
  ["ensalada cesar", "salmón", "platano", 100],
];
//Funcion Paella
const platoPrincipalPaella = (arr) => {
  let paella = arr.reduce((acumulador, valorActual) => {
    if (valorActual[1] === "paella") {
      acumulador++;
    }
    return acumulador;
  }, 0);
  return paella;
};
//Funcion postres platano O helado
const postresPlatanoHelado = (arr) => {
  let postres = arr.reduce((acumulador, valorActual) => {
    if (valorActual[2] === "platano" || valorActual[2] === "helado") {
      acumulador++;
    }
    return acumulador;
  }, 0);
  return postres;
};
//Funcion precio mayor a 90
const preciosMayor90 = (arr) => {
  let mayor90 = arr.reduce((acumulador, valorActual) => {
    if (valorActual[3] > 90) {
      //boquita se come al mas grande(mayor)
      acumulador++;
    }
    return acumulador;
  }, 0);
  return mayor90;
};
//Funcion precio menor a 90
const preciosMenor90 = (arr) => {
  let menor90 = arr.reduce((acumulador, valorActual) => {
    if (valorActual[3] < 90) {
      acumulador++;
    }
    return acumulador;
  }, 0);
  return menor90;
};
//Llamadas de funciones
const OrdenPaella = platoPrincipalPaella(pedidos);
const OrdenPostres = postresPlatanoHelado(pedidos);
const PrecioMayor = preciosMayor90(pedidos);
const PrecioMenor = preciosMenor90(pedidos);
//Impresiones
console.log("Las ordenes de paella son: " + OrdenPaella);
console.log("Las ordenes de Platano o helado de son: " + OrdenPostres);
console.log("Las ordenes que tienen un precio mayor a $90 son: " + PrecioMayor);
console.log("Las ordenes que tienen un precio menor a $90 son: " + PrecioMenor);
/**
 * Ejercicio 3:
 * Estudiar el tema de Objetos y métodos de Objetos
 */
