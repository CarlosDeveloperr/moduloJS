console.log("Eventos");

let koders = [
  {
    id: 23,
    name: "Jorge",
  },
  {
    id: 31,
    name: "Antonio",
  },
  {
    id: 212,
    name: "Fer",
  },
  {
    id: 20,
    name: "Rose",
  },
];

let listKoders = [...koders];
let enrolledKoders = [];
enrolledKoders = [
  {
    id: 25,
    name: "Carlos",
  },
];

/// print table koders

const printTableKoders = (arrKoders, selector, type) => {
  console.log("ArrayKoders", arrKoders);
  // temp
  let accKodersList = "";
  arrKoders.forEach((koder) => {
    if (type === "list") {
      accKodersList += `
          <tr class="trkoder_${koder.id}">
              <td>${koder.id}</td>
              <td>${koder.name}</td>
              <td>
                  <button class="btn btn-primary" onclick="enrolledkoder(${koder.id})">Inscribir</button>
              </td>
          </tr>
          `;
    } else {
      accKodersList += `
          <tr class="trkoder_${koder.id}">
              <td>${koder.id}</td>
              <td>${koder.name}</td>
              <td>
                  <button class="btn btn-warning" onclick="removekoder(${koder.id})">Dar de baja</button>
              </td>
          </tr>
          `;
    }
  });
  // DOM
  let sel = document.querySelector(selector);
  sel.innerHTML = accKodersList;
};

const enrolledkoder = (idKoder) => {
  // get koder data
  let koderItem = listKoders.filter((koder) => koder.id === idKoder);
  enrolledKoders.push(koderItem[0]);
  console.log("EnrolledKoders", enrolledKoders);

  // filter array without koder
  let kodersNotDeleted = listKoders.filter((koder) => koder.id !== idKoder);
  listKoders = [...kodersNotDeleted];

  updateScreen();
};

const removekoder = (idKoder) => {
  console.log("Idkoder", idKoder);
  let enrrolledKoder = enrolledKoders.filter((koder) => koder.id == idKoder);
  listKoders.push(enrrolledKoder[0]);
  // filter koder
  let newdataEnrrolledKoder = enrolledKoders.filter(
    (koder) => koder.id !== idKoder
  );
  enrolledKoders = [...newdataEnrrolledKoder];
  console.log("New data Enrolled:", newdataEnrrolledKoder);
  console.log("Enrolled", enrolledKoders);

  updateScreen();
};
//Peeposhy
const updateScreen = () => {
  printTableKoders(listKoders, ".table__koders tbody", "list");
  printTableKoders(enrolledKoders, ".table__kodersEnrrolled tbody", "enrolled");
};

let mostrar = document.querySelector(".Divbotones .mostrar");
let reset = document.querySelector(".Divbotones .reset");
if (mostrar) {
  mostrar.addEventListener("click", (event) => {
    updateScreen();
  });
}
if (reset) {
  reset.addEventListener("click", (event) => {
    listKoders = listKoders.concat(enrolledKoders);
    // listKoders = [...listKoders, ...enrolledKoders];
    enrolledKoders = [];
    updateScreen();
  });
}

// //con eventos
// let inscribir = document.querySelector("btn btn-primary");
// let DardeBaja = document.querySelector("btn btn-warning");
