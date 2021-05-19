console.log("Geters y Setters");

let koders = [
  {
    name: "jorge",
    lastName: "Camarillo",
    age: 26,
  },
  {
    name: "Carlos",
    lastName: "Alcibar",
    age: 26,
  },
];
//agregar una funcion como propiedad (metodo) a un objeto
koders.forEach((element) => {
  element.getnombreCompleto = function () {
    return `El Koder ${this.name} ${this.lastName}  y tienes ${this.age} años`;
  };
});
//imprimir todos los koder
koders.forEach((element) => {
  console.log(element.getnombreCompleto());
});
