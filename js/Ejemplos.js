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

//POST
// let objNewKoder = {
//   name: "Carlos",
//   lastname: "Alcibar",
//   age: 25,
//   position: "koder",
// };
// const requestAlta = new XMLHttpRequest();
// requestAlta.open(
//   "POST",
//   "https://python2g-default-rtdb.firebaseio.com/koders.json"
// );
// requestAlta.addEventListener("readystatechange", () => {
//   if (requestAlta.readyState !== 4) {
//     return;
//   } else {
//     if (requestAlta.status >= 200 && requestAlta.status <= 299) {
//       const response = requestAlta;
//       const objectResponse = JSON.parse(response.responseText);
//       console.log(objectResponse);
//     } else {
//       console.log("No se pudo ejecutar");
//     }
//   }
// });
// requestAlta.send(JSON.stringify(objNewKoder));

///DELETE

// const requestDelete = new XMLHttpRequest();
// let idKoder = "-MaWF-8Drq8wWp3LCNQx";
// requestDelete.open(
//   "DELETE",
//   `https://python2g-default-rtdb.firebaseio.com/koders/${idKoder}.json`
// );
// requestDelete.addEventListener("readystatechange", () => {
//   if (requestDelete.readyState !== 4) {
//     return;
//   } else {
//     if (requestDelete.status >= 200 && requestDelete.status <= 299) {
//       const response = requestDelete;
//       const objectResponse = JSON.parse(response.responseText);
//       console.log(objectResponse);
//     } else {
//       console.log("No se pudo ejecutar");
//     }
//   }
// });
// requestDelete.send();

//UPDATE (put{Todos los campos modificados});
// let objNewKoder = {
//   name: "CarLos",
//   lastname: "AlciBar",
//   age: 25,
//   position: "koDer",
// };

// const request = new XMLHttpRequest()
// request.open('PUT','https://python2g-default-rtdb.firebaseio.com/koders/-MaWLHKAIbLm2EL8O3mE.json')
// request.addEventListener('readystatechange', () => {
//   if(request.readyState !== 4) {
//       return
//   } else {
//       if(request.status >= 200 && request.status <= 299){
//           const response  = request
//           const objectResponse = JSON.parse(response.responseText)
//           console.log(objectResponse)
//       } else {
//           console.log('No se pudo ejecutar')
//       }
//   }
// })
// request.send(
//   JSON.stringify(objNewKoder)
// )

//UPDATE (Patch{Un campo modificado});
