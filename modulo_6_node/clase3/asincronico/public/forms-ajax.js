const form_crear = document.querySelector('#form-crear')
const nombre_crear = document.querySelector('#nombre-crear')
const contenido_crear = document.querySelector('#contenido-crear')

form_crear.addEventListener('submit', async function (e){
// 1.- evito que se envie el form 
e.preventDefault()

// 2.- obtengi el valor de los campos del formulario
const nombre = nombre_crear.value
const contenido = contenido_crear.value

// 3. envio la solicitud por ajax
let respuesta = await fetch('/crear-ajax', {
  method: 'POST',
  body: JSON.stringify({
    nombre,
    contenido
  })
})

//4.- despaquetamos 
respuesta = await respuesta.txt()

Swal.fire(respuesta)

// limpiar campos form 
nombre_crear.value = ''
contenido_crear.value = ''

})

// vemos leer 

const form_leer = document.querySelector('#form-leer')
const nombre_leer = document.querySelector('#nombre-leer')

form_leer.addEventListener('submit', async function (e){
// 1.- evito que se envie el form 
e.preventDefault()

// 2.- obtengi el valor de los campos del formulario
const nombre = nombre_leer.value

//3.- envio solicitud por ajax
let respuesta = await fetch('/leer?nombre=${nombre}')

//4.- despaquetamos 
respuesta = await respuesta.txt()

alert(respuesta)

// limpiar campos form 
nombre_crear.value = ''
contenido_crear.value = ''

})