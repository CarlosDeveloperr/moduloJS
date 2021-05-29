// crear usuario
$(document).ready(function () {
  console.log("ready");
  $("#btn__create--koder").click(function () {
    // sentencias
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
      console.log("Faltan datos obligatorios");
      return;
    }
    let newUserObject = {
      name: inputname,
      lastname: inputlastname,
      age: inputage,
      position: inputposition,
    };

    console.log(newUserObject);
    //AJAX POST
    $.ajax({
      // la URL para la petición
      url: "https://python-2g-default-rtdb.firebaseio.com/koders.json",
      // la información a enviar
      data: JSON.stringify(newUserObject),
      // especifica si será una petición POST o GET
      type: "POST",
      // el tipo de información que se espera de respuesta
      dataType: "json",
      // código a ejecutar si la petición es satisfactoria;
      // la respuesta es pasada como argumento a la función
      success: function (response) {
        console.log(response);
        console.log("Insercion lista");
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
        window.location.pathname = "/";
      },
    });
  });
});
