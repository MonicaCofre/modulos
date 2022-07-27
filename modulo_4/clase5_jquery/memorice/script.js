const h1 = $('h1');

h1.on('click', function () {
  h1.slideUp(2000)
})

$('.col-3').on('click', function () {
  $(this).slideUp(2000)
})

// tomar variables globales 

const divHipo = $('.col-3')
const divRow = $('#row')
const input = $('#input')
//let url = $('.form-control').val(); //obtengo el valor del input (url imagen)
const btnAgregar = $('#agregar')
btnAgregar.on('click', function () {
  let url = input.val().trim();
  if(url == ""){
    return
  }

  divRow.prepend(`
  <div class="col-3">
  <img src="${url}" alt="lemur">
  </div>`)
  $('.col-3').on('click', function () {
    $(this).slideUp(2000)
  })
})

const btn = $('#agregarfinal')
btn.on('click', function () {
  let url = input.val().trim();
  if(url == ""){
    return
  }
  divRow.append(`
  <div class="col-3">
  <img src="${url}" alt="hipopotamo">
  </div>`)
  $('.col-3').on('click', function () {
    $(this).slideUp(2000)
  })
})


