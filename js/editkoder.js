// get data search
const params = new URLSearchParams(window.location.search);
let idkoder = params.get("idkoder");
console.log(idkoder);
//impresion de card
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

//Editar Valores
btnEdit = document.getElementById("btn__edit--koder");
btnEdit.addEventListener("click", () => {
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
  // fetch(url, options*)

  fetch(
    `https://python-2g-default-rtdb.firebaseio.com/Koders/${idkoder}.json`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(UserObject),
    }
  )
    .then((res) => {
      return res.json();
    })
    .then((response) => {
      console.log(response);
      printKoderFetch();
    });
});
