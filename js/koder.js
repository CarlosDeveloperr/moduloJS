// get data search
const params = new URLSearchParams(window.location.search);
let idkoder = params.get("idkoder");
console.log(idkoder);

const printKoderXHR = () => {
  const request = new XMLHttpRequest();
  request.open(
    "GET",
    `https://python-2g-default-rtdb.firebaseio.com/Koders/${idkoder}.json`
  );
  request.addEventListener("readystatechange", () => {
    if (request.readyState !== 4) {
      return;
    } else {
      if (request.status >= 200 && request.status <= 299) {
        const response = request;
        const objectResponse = JSON.parse(response.responseText);
        console.log(objectResponse);

        if (objectResponse !== null) {
          let { name, lastname, position, age } = objectResponse;
          document.querySelector(
            ".card-title"
          ).innerHTML = `${name} ${lastname}`;
          document.querySelector(
            ".card-text"
          ).innerHTML = `${position} <br> ${age} años`;
          document.querySelector(
            ".card_id"
          ).innerHTML = `<small>${idkoder}</small>`;
        }
      } else {
        console.log("No se pudo ejecutar");
      }
    }
  });
  request.send();
};

const printKoderFetch = () => {
  fetch(
    `https://python-2g-default-rtdb.firebaseio.com/Koders/${idkoder}.json`,
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

// front end
// -> API JS fetch, xhr, jquery

// ...
// ...
// ...

// backend
// {URL del api}/koders
// API - django rest framework
// -> logica del API
// -> consultas a base de datos
// -> crear base de datos
// -> Admin

// devops
// cloud
