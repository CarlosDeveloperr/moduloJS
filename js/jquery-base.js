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

//Informacion util

// $('ol li').addClass('list__item')
// navegar de padres a hijos
// $('.parent').find('.middle_parent').find('.child').addClass('selected')
// // navegar de hijos a padres
// $('.child').parent().attr('id','parentchild')
// $('.child').closest('.container').addClass('otraclase')

// // navegar hacia arriba o abajo
// $('.child').prev('.hermano').text()
// $('.child').next().text()
// $('.child').prev().prev().text()
// $('.parrafo').text('testing')

// Agregar clases
// $('selector').method()
// addClass('class')
// removeClass('class')
// hasClass('class')
// attr('class')
// attr('class','clase')
// css('color','#444')
// css({
//     'color':'#444',
//     'font-size':'100px'
// })
// .remove()
