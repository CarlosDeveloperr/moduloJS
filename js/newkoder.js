// crear usuario
btncreate = document.getElementById("btn__create--koder");
btncreate.addEventListener("click", () => {
  inputname = document.getElementById("name").value;
  inputlastname = document.getElementById("lastname").value;
  inputage = parseInt(document.getElementById("age").value);
  inputposition = document.getElementById("position").value;

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

  // const request = new XMLHttpRequest()
  // request.open('POST','https://python2g-default-rtdb.firebaseio.com/koders/.json')
  // request.addEventListener('readystatechange', () => {
  //     if(request.readyState !== 4) {
  //         return
  //     } else {
  //         if(request.status >= 200 && request.status <= 299){
  //             const response  = request
  //             const objectResponse = JSON.parse(response.responseText)
  //             console.log(objectResponse)
  //             window.location.pathname = '/'

  //         } else {
  //             console.log('No se pudo ejecutar')
  //         }
  //     }
  // })

  // request.send(
  //     JSON.stringify(newUserObject)
  // )

  // fetch(url, options*)

  fetch("https://python-2g-default-rtdb.firebaseio.com/Koders.json", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUserObject),
  })
    .then((res) => {
      return res.json();
    })
    .then((response) => {
      console.log(response);
      window.location.pathname = "/";
    });
});

// 1 Crear la pagina de actualizar cualquier usuario
// 2. Crear la pantala del listado
// 2.1. Por cada koder crear un boton de eliminar
// 2.2. Por cada koder, crear una pagina de interior
