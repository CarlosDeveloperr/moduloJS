console.log("jquery class");

// $(document).ready(function () {
//   console.log("Document ready");
//   //sentecias de mi pagina
//   //peticiones AJAX
//   //DOM
//   //Effects
//   //Traversing

//   $("container > div").addClass("list");

//   //Creacion
//   //lo inserta debajo de todo
//   // $('container > div').append(`
//   // <ol>
//   // <li></li>
//   // <li></li>
//   // <li></li>
//   // <li></li>
//   // <li></li>
//   // </ol>`)
//   //Lo inserta arriba de todo
//   //.prepend(` <h2></h2>`)

//   $("ol li").addClass("list__item");
// });

$(document).ready(function () {
  $("ul").append(`

  <li>append</li>
  <li>append</li>
  <li>append</li>
  <li>append</li>
  <li>append</li>
  `);

  $("ul").prepend(` <li>prepend</li>
  <li>prepend</li>
  <li>prepend</li>
  <li>prepend</li>
  <li>prepend</li>`);

  $("content").html(`<p>Hola Koder</p>`);
  $("div").css({ color: "#ffff" });
  $("div ").css({ background: "#333" });

  $("h1").text("learning Jquery");
});
