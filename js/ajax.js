console.log("ajax");
/**
 * AJAX. Asyncronous Java Script And XML
 * JSON
 * XHR -> xmlhttprequest
 * Fetch
 */

// Instanciarlo
// Abrir la conexion
// Enviar la petición

let objNewKoder = {
  name: "Carlos",
  lastname: "Alcibar",
  age: 25,
  position: "koder",
};
const request = new XMLHttpRequest();
request.open(
  "POST",
  "https://python2g-default-rtdb.firebaseio.com/koders.json"
);
request.addEventListener("readystatechange", () => {
  if (request.readyState !== 4) {
    return;
  } else {
    if (request.status >= 200 && request.status <= 299) {
      const response = request;
      const objectResponse = JSON.parse(response.responseText);
      console.log(objectResponse);
    } else {
      console.log("No se pudo ejecutar");
    }
  }
});
request.send(JSON.stringify(objNewKoder));
