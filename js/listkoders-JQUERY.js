console.log($(this));

const printKoders = (obKoders) => {
  let acc = "";

  for (key in obKoders) {
    let { name, lastname } = obKoders[key];
    acc += `
        <li class="list-group-item d-flex justify-content-between">
            <p class="pr-4 text-left">${name} ${lastname}</p>
            <div class="options__koder">
                <a href="/koder.html?idkoder=${key}" class="pr-4 ml-3 btn  btn-primary">Ver koder</a>
                <a href="#" class="pr-4 ms-2 btn btn-danger deletekoder" data-id="${key}">Eliminar</a>
                <a href="/editkoder.html?idkoder=${key}" class="pr-4 ms-2 btn btn-primary">Editar koder</a>
            </div>
        </li>
        `;
  }

  // console.log(acc)
  // let list__koders = document.querySelector('.list__koders')
  // list__koders.innerHTML = acc
  $(".list__koders").html(acc);
};

const getAllKodersXHR = () => {
  const request = new XMLHttpRequest();
  request.open(
    "GET",
    `https://python-2g-default-rtdb.firebaseio.com/koders.json`
  );
  request.addEventListener("readystatechange", () => {
    if (request.readyState !== 4) {
      return;
    } else {
      if (request.status >= 200 && request.status <= 299) {
        const objectResponse = JSON.parse(request.responseText);
        // printKoders(objectResponse)
      } else {
        console.log("No se pudo ejecutar");
      }
    }
  });
  request.send();
};

// getAllKodersXHR()
const getAllKodersFetch = () => {
  // $.get
  // $.get('url', callback)
  // $.get('https://python2g-default-rtdb.firebaseio.com/koders.json', (response) => {
  //     printKoders(response)
  // })

  // $.ajax()
  // GET -> $.get() , POST -> $.post()
  // DELETE, PATCH, PUT -> $.ajax()

  // $.ajax()
  $.ajax({
    // la URL para la petición
    url: "https://python-2g-default-rtdb.firebaseio.com/koders.json",
    // la información a enviar
    // data : { id : 123 },
    // especifica si será una petición POST o GET
    // type : 'GET',
    // el tipo de información que se espera de respuesta
    dataType: "json",
    // código a ejecutar si la petición es satisfactoria;
    // la respuesta es pasada como argumento a la función
    success: function (response) {
      console.log(response);
      printKoders(response);
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
};

$(() => {
  getAllKodersFetch();
  // Delegacion de eventos JS

  // Delegacion de eventos jQuery
  // elementos que aun no han sido creados
  $(".list__koders").on("click", ".deletekoder", async function () {
    let idkoder = $(this).attr("data-id");
    console.log(idkoder);
    //$AJAX DELETE
    $.ajax({
      // la URL para la petición
      url: `https://python-2g-default-rtdb.firebaseio.com/koders/${idkoder}.json`,
      // la información a enviar
      // data : { id : 123 },
      // especifica si será una petición POST o GET
      type: "DELETE",
      // el tipo de información que se espera de respuesta
      dataType: "json",
      // código a ejecutar si la petición es satisfactoria;
      // la respuesta es pasada como argumento a la función
      success: function (response) {
        console.log(response);
        printKoders(response);
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

  // elementos ya creados
  // $('.deletekoder').click(function(){
  //     console.log('click en delete')
  // })
});
