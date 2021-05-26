const printKoders = (obKoders) => {
  let acc = "";
  for (key in obKoders) {
    let { name, lastname } = obKoders[key];
    acc += `
        <li class="list-group-item d-flex justify-content-between">
            <p class="pr-4 text-left">${name} ${lastname}</p>
            <div class="options__koder">
                <a href="/koder.html?idkoder=${key}" class="pr-4 btn btn-primary">Ver koder</a>
                <a href="#" class="pr-4 btn btn-danger deletekoder" data-id="${key}">Eliminar</a>
                <a href="/editkoder.html?idkoder=${key}" class="pr-4 btn btn-primary">Editar koder</a>
            </div>
        </li>
        `;
  }

  // console.log(acc)
  let list__koders = document.querySelector(".list__koders");
  list__koders.innerHTML = acc;
};

const getAllKodersXHR = () => {
  const request = new XMLHttpRequest();
  request.open(
    "GET",
    `https://python-2g-default-rtdb.firebaseio.com/Koders.json`
  );
  request.addEventListener("readystatechange", () => {
    if (request.readyState !== 4) {
      return;
    } else {
      if (request.status >= 200 && request.status <= 299) {
        const objectResponse = JSON.parse(request.responseText);
        // printKoders(objectResponse)
        console.log(objectResponse);
      } else {
        console.log("No se pudo ejecutar");
      }
    }
  });
  request.send();
};

// getAllKodersXHR()
const getAllKodersFetch = () => {
  // GET
  fetch("https://python-2g-default-rtdb.firebaseio.com/Koders.json")
    .then((result) => {
      return result.json();
    })
    .then((response) => {
      console.log(response);
      console.log("print koders");
      printKoders(response);
    })
    .catch((error) => {
      console.log(error);
      console.error("Error:", error);
    });
};

getAllKodersFetch();

// Delegacion de eventos
let listkoders = document.querySelector(".list__koders");
listkoders.addEventListener("click", (e) => {
  console.log(e.target.dataset.id);
  if (e.target.classList.contains("deletekoder")) {
    let idkoder = e.target.dataset.id;

    // const requestDelete = new XMLHttpRequest()
    // requestDelete.open('DELETE',`https://python2g-default-rtdb.firebaseio.com/koders/${idkoder}.json`)
    // requestDelete.addEventListener('readystatechange', () => {
    //     if(requestDelete.readyState !== 4) {
    //         return
    //     } else {
    //         if(requestDelete.status >= 200 && requestDelete.status <= 299){

    //             const objectResponse = JSON.parse(requestDelete.responseText)
    //             getAllKodersFetch()
    //         } else {
    //             console.log('No se pudo ejecutar')
    //         }
    //     }
    // })
    // requestDelete.send()

    fetch(
      `https://python-2g-default-rtdb.firebaseio.com/Koders/${idkoder}.json`,
      {
        method: "DELETE",
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        getAllKodersFetch();
      });
  }
});
