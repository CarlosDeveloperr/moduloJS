// get data search
const params = new URLSearchParams(window.location.search);
let idkoder = params.get("idkoder");
console.log(idkoder);

$(document).ready(function () {});
//impresion de card
const printKoderFetch = () => {
  fetch(
    `https://python-2g-default-rtdb.firebaseio.com/koders/${idkoder}.json`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => {
      return res.json();
    })
    .then((response) => {
      console.log(response);
      if (response !== null) {
        let { name, lastname, position, age } = response;
        document.querySelector(".card-title").innerHTML = `${name} ${lastname}`;
        document.querySelector(
          ".card-text"
        ).innerHTML = `${position} <br> ${age} años`;
        document.querySelector(
          ".card_id"
        ).innerHTML = `<small>${idkoder}</small>`;
      }
    });
};

printKoderFetch();

//Editar Valores
$("#btn__edit--koder").click(function () {
  let inputname = $("#name").val();
  let inputlastname = $("#lastname").val();
  let inputage = parseInt($("#age").val());
  let inputposition = $("#position").val();

  if (
    inputname == "" ||
    inputlastname == "" ||
    inputage == "" ||
    inputposition == ""
  ) {
    console.log(
      "Faltan datos obligatorios:\n 1.Que no Cargo el sistema\n     2.Que Falta que rellenes"
    );
    return;
  }

  let UserObject = {
    name: inputname,
    lastname: inputlastname,
    age: inputage,
    position: inputposition,
  };
  console.log("Valores a enviar:", UserObject);

  // $.ajax()
  $.ajax({
    // la URL para la petición
    url: `https://python-2g-default-rtdb.firebaseio.com/koders/${idkoder}.json`,
    // la información a enviar
    data: JSON.stringify(UserObject),
    // especifica si será una petición POST o GET
    type: "PUT",
    // el tipo de información que se espera de respuesta
    dataType: "json",
    // código a ejecutar si la petición es satisfactoria;
    // la respuesta es pasada como argumento a la función
    success: function (response) {
      console.log(response);
      console.log("Usario Editado");
      printKoderFetch();
      let blanco = "";
      $("#name").val(blanco);
      $("#lastname").val(blanco);
      $("#age").val(blanco);
      $("#position").val(blanco);
    },

    // código a ejecutar si la petición falla;
    // son pasados como argumentos a la función
    // el objeto de la petición en crudo y código de estatus de la petición
    error: function (xhr) {
      console.log(xhr);
      console.log(xhr.statusText);
      //console.error('Disculpe, existió un problema');
      // sentencias
    },

    // código a ejecutar sin importar si la petición falló o no
    complete: function (xhr, status) {
      console.log(xhr, status);
      console.log("Petición realizada");
    },
  });
});
