/**
 * Ejercicio 1
 * Dado el siguiente array de objetos generar
 * Funcion que pinte mi lista de deseos

 */

let WishList = [
  {
    iditem: 5,
    name: "Nike Jacket",
    description: "Nike Jacket-Chamarra de hombre",
    price: 1000,
    imgurl: "https://www.amazon.com.mx/images/I/71dLLLfSfUL._AC_SY695_.jpg",
  },
  {
    iditem: 1,
    name: "Adidas Grand Court",
    description: "Adidas Grand Court Base EE7905 Tenis para Hombre",
    price: 859,
    imgurl: "https://www.amazon.com.mx/images/I/71wNHYOh60L._AC_SX695_.jpg",
  },
  {
    iditem: 2,
    name: "Nike Metcon",
    description:
      "Nike Metcon Sport Aq7489-008 - Zapatillas deportivas para hombre",
    price: 990,
    imgurl: "https://www.amazon.com.mx/images/I/71dLLLfSfUL._AC_SY695_.jpg",
  },
  {
    iditem: 3,
    name: "Nike Carreras",
    description: "Nike Carreras de mujer",
    price: 1200,
    imgurl: "https://www.amazon.com.mx/images/I/71wNHYOh60L._AC_SX695_.jpg",
  },
];

// * Funcion que ordene por id mi lista de deseos
const AcomodadoId = (arr) => {
  const aux2 = WishList.slice();
  aux2.sort((a, b) => {
    if (a.iditem > b.iditem) {
      return 1; //El que quiero que vaya primero
    }
    if (a.iditem < b.iditem) {
      return -1;
    }
    return 0;
  });
  return aux2;
};
// * Funcion que ordene por nombre de producto mi lista de deseos
const AcomodadoNombre = (arr) => {
  const aux = WishList.slice();
  aux.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });
  return aux;
};
// * Funcion que ordene por precio mi lista de deseos
const AcomodadoPrecio = (arr) => {
  const aux1 = WishList.slice();
  aux1.sort((a, b) => {
    if (a.price < b.price) {
      return -1;
    }
    if (a.price < b.price) {
      return 1;
    }
    return 0;
  });
  return aux1;
};

const SortId = AcomodadoId(WishList);
const SortNombre = AcomodadoNombre(WishList);
const SortPrecio = AcomodadoPrecio(WishList);

//Llenado de html dinamico
//Funcion Pintar lista de deseos  bg-primary
let listaObjetoColorear = document.querySelector(".table-Colorear tbody");

let listKodersObjColorear = "";
SortId.forEach((elemento) => {
  listKodersObjColorear += `
          <tr>
            <th scope="row">${elemento.iditem}</th>
            <td class="Nombre bg-primary">${elemento.name}</td>
            <td class="Descripcion">${elemento.description}</td>
            <td class="Precio">${elemento.price}</td>
            <td class="ImgUrl">${elemento.imgurl}</td>
          </tr>
    `;
});
listaObjetoColorear.innerHTML = listKodersObjColorear;

//Llenado dinamico de SortId
let listaObjetoID = document.querySelector(".table-SortId tbody");

let listKodersObj = "";
SortId.forEach((elemento) => {
  listKodersObj += `
          <tr>
            <th scope="row">${elemento.iditem}</th>
            <td class="Nombre">${elemento.name}</td>
            <td class="Descripcion">${elemento.description}</td>
            <td class="Precio">${elemento.price}</td>
            <td class="ImgUrl">${elemento.imgurl}</td>
          </tr>
    `;
});
listaObjetoID.innerHTML = listKodersObj;
//Llenado dinamico de SortNombre
let listaObjetoNombre = document.querySelector(".table-SortNombre tbody");

let listKodersObj2 = "";
SortNombre.forEach((elemento) => {
  listKodersObj2 += `
          <tr>
            <th scope="row">${elemento.iditem}</th>
            <td class="Nombre">${elemento.name}</td>
            <td class="Descripcion">${elemento.description}</td>
            <td class="Precio">${elemento.price}</td>
            <td class="ImgUrl">${elemento.imgurl}</td>
          </tr>
    `;
});
listaObjetoNombre.innerHTML = listKodersObj2;
//Llenado dinamico de SortPrecio
let listaObjetoPrecio = document.querySelector(".table-SortPrecio tbody");

let listKodersObj3 = "";
SortPrecio.forEach((elemento) => {
  listKodersObj3 += `
          <tr>
            <th scope="row">${elemento.iditem}</th>
            <td class="Nombre">${elemento.name}</td>
            <td class="Descripcion">${elemento.description}</td>
            <td class="Precio">${elemento.price}</td>
            <td class="ImgUrl">${elemento.imgurl}</td>
          </tr>
    `;
});
listaObjetoPrecio.innerHTML = listKodersObj3;
