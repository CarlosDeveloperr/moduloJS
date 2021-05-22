console.log("Eventos");

let koders = [
  {
    id: 23,
    name: "jorge",
  },
  {
    id: 31,
    name: "Antonio",
  },
  {
    id: 212,
    name: "fer",
  },
  {
    id: 20,
    name: "rose",
  },
];

let listKoders = [...koders];
let enrolledKoders = [
  {
    id: 234,
    name: "Yair",
  },
];

// print table koders

const printTableKoders = (arrKoders, selector, type) => {
  // temp
  let accKodersList = "";
  arrKoders.forEach((koder, index) => {
    if (type === "list") {
      accKodersList += `
          <tr class="trkoder_${koder.id}">
              <td>${koder.id}</td>
              <td>${koder.name}</td>
              <td>
                  <button class="btn btn-primary enrolledKoderButton" data-id="${koder.id}" data-index="${index}">Inscribir</button>
              </td>
          </tr>
          `;
    } else {
      accKodersList += `
          <tr class="trkoder_${koder.id}">
              <td>${koder.id}</td>
              <td>${koder.name}</td>
              <td>
                  <button class="btn btn-warning removeKoderButton" data-id="${koder.id}" data-index="${index}">Dar de baja</button>
              </td>
          </tr>
          `;
    }
  });
  // DOM
  let sel = document.querySelector(selector);
  sel.innerHTML = accKodersList;
};

const updateTable = () => {
  printTableKoders(listKoders, ".table__koders tbody", "list");
  printTableKoders(enrolledKoders, ".table__kodersEnrrolled tbody", "enrolled");
};

let wrappKoderList = document.querySelector(".table__koders tbody");
wrappKoderList.addEventListener("click", (event) => {
  // console.log(event.target);

  if (event.target.classList.contains("enrolledKoderButton")) {
    let idKoder = parseInt(event.target.dataset.id);

    let koderItem = listKoders.filter((koder) => koder.id === idKoder);
    enrolledKoders.push(koderItem[0]);

    let kodersNotDeleted = listKoders.filter((koder) => koder.id !== idKoder);
    listKoders = [...kodersNotDeleted];

    updateTable();
  }
});

let wrappKoderEnrrolled = document.querySelector(
  ".table__kodersEnrrolled tbody"
);
wrappKoderEnrrolled.addEventListener("click", (element) => {
  console.log(element.target.classList);
  if (element.target.classList.contains("removeKoderButton")) {
    let idKoder = parseInt(element.target.dataset.id);

    let enrrolledKoder = enrolledKoders.filter((koder) => koder.id == idKoder);
    let newdataEnrrolledKoder = enrolledKoders.filter(
      (koder) => koder.id !== idKoder
    );

    listKoders.push(enrrolledKoder[0]);
    enrolledKoders = [...newdataEnrrolledKoder];

    updateTable();
  }
});

// mostrar
let btnShow = document.querySelector(".mostrar");
if (btnShow) {
  btnShow.addEventListener("click", () => {
    updateTable();
  });
}

let btnReset = document.querySelector(".reset");
if (btnReset) {
  btnReset.addEventListener("click", () => {
    listKoders = listKoders.concat(enrolledKoders);
    // listKoders  = [...listKoders, ...enrolledKoders]
    enrolledKoders = [];

    updateTable();
  });
}

let loginForm = document.querySelector("#formLogin");
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // console.log('click en enviar')
  if (document.querySelector("#idkoder").value === "") {
    alert("Escribe un ID");
    return;
  }
  if (document.querySelector("#namekoder").value === "") {
    alert("Escribe un nombre de Koder");
    return;
  }

  let idkoder = parseInt(document.querySelector("#idkoder").value);
  let namekoder = document.querySelector("#namekoder").value;
  let aux = { id: idkoder, name: namekoder };
  //Insertar nueva tupla
  console.log("Antes de la insercion", listKoders);
  listKoders.push(aux);
  console.log("Despues de la insercion", listKoders);
  console.log("enviamos los datos de Nuevo Koder");
});
