/** 
 * Crear las funciones que :

 * Filtre los libros que estan ocupados
 * 
 */
//Teniendo como base este array de objetos
let library = [
  {
    author: "Steve Jobs",
    title: "The Road Ahead",
    readingStatus: false,
  },
  {
    author: "A",
    title: "Cpocalypse",
    readingStatus: true,
  },
  {
    author: "C",
    title: "Apocalypse",
    readingStatus: true,
  },
  {
    author: "Bill Gates",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

// // * Ordene el array de objetos de acuerdo al titulo
// const AcomodadoTitulo = (arr) => {
//   const aux2 = library.sort((a, b) => {
//     if (a.title > b.title) {
//       return 1; //El que quiero que vaya primero
//     }
//     if (a.title < b.title) {
//       return -1;
//     }
//     return 0;
//   });
//   return aux2;
// };
// // * Ordene el array de objetos de acuerdo al autor
// const AcomodadoAutor = (arr) => {
//   const aux = library.sort((a, b) => {
//     if (a.autor > b.autor) {
//       return -1;
//     }
//     if (a.autor < b.autor) {
//       return 1;
//     }
//     return 0;
//   });
//   return aux;
// };
// // * Ordene el array de objetos de acuerdo al "readingStatus"

// const AcomodadoStatus = (arr) => {
//   const aux1 = library.sort((a) => {
//     if (a.readingStatus === true) {
//       return -1;
//     }
//     if (a.readingStatus === false) {
//       return 1;
//     }
//     return 0;
//   });
//   return aux1;
// };

/************************************* */
//Segunda solucion
const AcomodadoTitulo = (arr) => {
  const aux2 = library.slice();
  aux2.sort((a, b) => {
    if (a.title > b.title) {
      return 1; //El que quiero que vaya primero
    }
    if (a.title < b.title) {
      return -1;
    }
    return 0;
  });
  return aux2;
};
// * Ordene el array de objetos de acuerdo al autor
const AcomodadoAutor = (arr) => {
  const aux = library.slice();
  aux.sort((a, b) => {
    if (a.autor > b.autor) {
      return -1;
    }
    if (a.autor < b.autor) {
      return 1;
    }
    return 0;
  });
  return aux;
};
const AcomodadoStatus = (arr) => {
  const aux1 = library.slice();
  aux1.sort((a) => {
    if (a.readingStatus === true) {
      return -1;
    }
    if (a.readingStatus === false) {
      return 1;
    }
  });
  return aux1;
};

const SortTitulo = AcomodadoTitulo(library);
console.log("Los libros acomodados por titulos: ", SortTitulo);
const SortAutor = AcomodadoAutor(library);
console.log("Los libros acomodados por Autor: ", SortAutor);
const SortStatus = AcomodadoStatus(library);
console.log("Los libros acomodados por Status: ", SortStatus);
