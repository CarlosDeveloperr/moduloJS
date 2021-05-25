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

//Llenado dinamico parte 1
const printComments = (arr) => {
  let acc = "";
  arr.forEach((comment) => {
    acc +=
      // <th scope="row">1</th>
      ` 
    <tr>
    <td>${comment.postId}</td>
    <td>${comment.id}</td>
    <td>${comment.name}</td>
    <td>${comment.email}</td>
    <td>${comment.body}</td>
    <a href="/comment.html?idComment=${comment.id}" class="pr-4">Ver post</a>
  </tr>
  
        `;
  });
  let list__JSON1 = document.querySelector(".list__JSON1");
  list__JSON1.innerHTML = acc;
};

const request = new XMLHttpRequest();
request.open("GET", "https://jsonplaceholder.typicode.com/comments");
request.addEventListener("readystatechange", () => {
  if (request.readyState !== 4) {
    return;
  } else {
    if (request.status >= 200 && request.status <= 299) {
      const response = request;
      const objectResponse = JSON.parse(response.responseText);
      console.log(objectResponse);
      printComments(objectResponse);
    } else {
      console.log("No se pudo ejecutar");
    }
  }
});
request.send();

//llenado dinamico parte 2
const request2 = new XMLHttpRequest();
request2.open("GET", "https://jsonplaceholder.typicode.com/photos");
request2.addEventListener("readystatechange", () => {
  if (request2.readyState !== 4) {
    return;
  } else {
    if (request2.status >= 200 && request2.status <= 299) {
      const response = request2;
      const objectResponse = JSON.parse(response.responseText);
      console.log(objectResponse);
      printPhotos(objectResponse);
    } else {
      console.log("No se pudo ejecutar");
    }
  }
});
request2.send();

const printPhotos = (arr) => {
  let acc = "";
  arr.forEach((photo) => {
    acc +=
      // <th scope="row">1</th>
      `
    <tr>
    <td>${photo.albumId}</td>
    <td>${photo.id}</td>
    <td>${photo.title}</td>
    <td><a href="${photo.url}" class="pr-4">Ver photo</a></td>
    <td><a href="${photo.thumbnailUrl}" class="pr-4">Ver thumbnail</a></td>
    <a href="/photo.html?idphoto=${photo.id}" class="pr-4">Ver foto unica</a>
  </tr>

        `;
  });
  let list__JSON2 = document.querySelector(".list__JSON2");
  list__JSON2.innerHTML = acc;
};

//URL dinamica
const printComment = () => {};

if (window.location.pathname === "/comment.html") {
  let search = window.location.search;
  let start = search.indexOf("=") + 1;
  let idComment = parseInt(search.slice(start));

  const request = new XMLHttpRequest();
  request.open(
    "GET",
    `https://jsonplaceholder.typicode.com/comments/${idComment}`
  );
  request.addEventListener("readystatechange", () => {
    if (request.readyState !== 4) {
      return;
    } else {
      if (request.status >= 200 && request.status <= 299) {
        const response = request;
        const objectResponse = JSON.parse(response.responseText);
        //console.log(objectResponse);
        let { postId, id, name, email, body } = objectResponse;
        document.querySelector(".card-title").innerText = `${id} : ${name}`;
        document.querySelector(".card-text").innerText = body;
        document.querySelector(".btn-primary").innerText = email;
        document
          .querySelector(".btn-primary")
          .setAttribute("href", `https://outlook.live.com/owa/`);
        document.querySelector(".btn-primary").setAttribute("target", "_blank");
      } else {
        console.log("No se pudo ejecutar");
      }
    }
  });
  request.send();

  // if (objectResponse !== undefined) {
  //   printComment();
  // }
}

//URL dinamico Photo
const printPhoto = () => {};

if (window.location.pathname === "/photo.html") {
  let search = window.location.search;
  let start = search.indexOf("=") + 1;
  let idPhoto = parseInt(search.slice(start));

  const request = new XMLHttpRequest();
  request.open("GET", `https://jsonplaceholder.typicode.com/photos/${idPhoto}`);
  request.addEventListener("readystatechange", () => {
    if (request.readyState !== 4) {
      return;
    } else {
      if (request.status >= 200 && request.status <= 299) {
        const response = request;
        const objectResponse = JSON.parse(response.responseText);
        let { albumId, id, title, url, thumbnailUrl } = objectResponse;
        console.log(id, title, url, thumbnailUrl);
        document.querySelector(".card-title").innerText = `${id} : ${title}`;
        document.querySelector(".url").innerText = `Estas es la url: ${url}`;
        document.querySelector(
          ".btn-primary"
        ).innerText = `Este es el thumnailUrl: ${thumbnailUrl}`;
        document
          .querySelector(".btn-primary")
          .setAttribute("href", `https://outlook.live.com/owa/`);
        document.querySelector(".btn-primary").setAttribute("target", "_blank");
      } else {
        console.log("No se pudo ejecutar");
      }
    }
  });
  request.send();

  // if (objectResponse !== undefined) {
  //   printPhoto();
  // }
}
