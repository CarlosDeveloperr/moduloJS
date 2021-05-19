console.log("DOOOM");
/*
let lista = document.querySelector('.lista')
let koders = ['antonio', 'victor', 'rose', 'jorge']
let listKoders = ''
koders.forEach( (namekoder, index) => {
    listKoders += `
        <li 
            id="koder${index + 1}"
            key='koder_${index}'
            class='item_koder'
        >
            ${namekoder}
        </li>
    `
})
lista.innerHTML = listKoders




*/
//imprimir Array en table
let koders = ["antonio", "victor", "rose", "jorge"];
let lista = document.querySelector(".table-Array tbody");

let listKoders = "";
koders.forEach((namekoder, index) => {
  listKoders += `
          <tr>
            <th scope="row">${index + 1}</th>
            <td class="Nombre">${namekoder}</td>
          </tr>
    `;
});
lista.innerHTML = listKoders;

//Imprimir objeto en table
/*
Destructuracion de objetos

let obj = {
    name: 'jorge',
    lastName: 'camarillo',
    age: 30,
    github:'@dered-dev'
}
let {name, lastName} = obj
*/
let kodersObject = [
  {
    name: "Jorge",
    lastName: "Camarillo",
    age: 30,
    github: "@dered-dev",
  },
  {
    name: "Carlos",
    lastName: "Alcibar",
    age: 24,
    github: "@DevCarlos",
  },
  {
    name: "Daniela",
    lastName: "Belaunzaran",
    age: 23,
    github: "@DaniScrum",
  },
];
let listaObjeto = document.querySelector(".table-Object tbody");

let listKodersObj = "";
kodersObject.forEach((elemento, index) => {
  listKodersObj += `
          <tr>
            <th scope="row">${index + 1}</th>
            <td class="Nombre">${elemento.name}</td>
            <td class="Apellido">${elemento.lastName}</td>
            <td class="Edad">${elemento.age}</td>
            <td class="Github">${elemento.github}</td>
          </tr>
    `;
});
listaObjeto.innerHTML = listKodersObj;
