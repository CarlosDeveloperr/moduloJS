// let obj = {
//   entrada: "",
//   comidaPrincipal: "",
//   postre: "",
//   precio: 100,
// };

let pedidos = [
  {
    ensalada: "ensalada de pepinos",
    comidaPrincipal: "paella",
    postre: "platano",
    precio: "100",
  },
  {
    ensalada: "ensalada de tomates",
    comidaPrincipal: "pescado",
    postre: "helado",
    precio: "120",
  },
  {
    ensalada: "ensalada  cesar",
    comidaPrincipal: "enchiladas",
    postre: "platano",
    precio: "80",
  },
  {
    ensalada: "ensalada simple",
    comidaPrincipal: "salmón",
    postre: "yogurt",
    precio: "100",
  },
];

// [{},{},{},{},{}]

//Funcion Paella
const platoPrincipalPaella = (arr) => {
  let paella = arr.reduce((acumulador, valorActual) => {
    if (valorActual.comidaPrincipal === "paella") {
      acumulador++;
    }
    return acumulador;
  }, 0);
  return paella;
};
//Funcion postres platano O helado
const postresPlatanoHelado = (arr) => {
  let postres = arr.reduce((acumulador, valorActual) => {
    if (valorActual.postre === "platano" || valorActual.postre === "helado") {
      acumulador++;
    }
    return acumulador;
  }, 0);
  return postres;
};
//Funcion precio mayor a 90
const preciosMayor90 = (arr) => {
  let mayor90 = arr.reduce((acumulador, valorActual) => {
    if (valorActual.precio > 90) {
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
    if (valorActual.precio < 90) {
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
