const buscar_input = document.getElementById('input')


export async function buscar(){
  const input = buscar_input.value.trim();
  if (input == '') {
    return;
  }
console.log('probando')
// se crea funcion para comprobar si input tiene valor y si es así, se crea un nuevo Item
//funciones para separar la captura de la información ingresada por el usuario con la consulta a la API. (1 Punto)
const dataApi = await fetch(`https://www.superheroapi.com/api.php/10226614477164459/${input}`)
const data = await dataApi.json()




console.log(data)
clean()
}

function clean() {
let btn_ = document.querySelector('#input').value = "";
}


const btn = document.getElementById('btn')
//Capturar la información ingresada mediante eventos del DOM



//Constructor
class Hero {
  // "nuevoid" es la clase de la 'card' que contiene todo el resto de cosas 
  constructor (nuevoid) {
    this.put_html(nuevoid)
    
    // etiquetas HTML del usuario
    this.input = document.querySelector(`.${nuevoid} .id`)
    this.btn_buscar = document.querySelector(`.${nuevoid} .btn-buscar`)

    this.public_repos = document.querySelector(`.${nuevoid} .conexiones`)
    this.followers = document.querySelector(`.${nuevoid} .publicado`)
    this.following = document.querySelector(`.${nuevoid} .ocupacion`)
    this.public_gists = document.querySelector(`.${nuevoid} .aparicion1`)
    this.public_gists1 = document.querySelector(`.${nuevoid} .altura`)
    this.public_gists2 = document.querySelector(`.${nuevoid} .peso`)
    this.public_gists3 = document.querySelector(`.${nuevoid} .alianza`)


    this.btn.addEventListener('click',  this.buscar)
  }

  buscar = async () => {
    const ident = this.input.value.trim();

    if (ident == '') {
      return;
    }

    const datos = await fetch(`https://www.superheroapi.com/api.php/10226614477164459/${ident}`)
    const data = await datos.json()

    this.public_repos.textContent = data.conexiones
    this.public_gists.textContent = data.publicado
    this.followers.textContent = data.ocupacion
    this.following.textContent = data.aparicion1

    
  }

  put_html (nuevoid) {
    const row_datas = document.querySelector('.datas')
    row_datas.innerHTML += `
      <ul class="list-group ${nuevoid}">
        <li class="list-group-item">Conexiones: <span class="conexiones"></span></li>
        <li class="list-group-item">Publicado:<span class="publicado"></span></li>
        <li class="list-group-item">Ocupacion: <span class="ocupacion"></span></li>
        <li class="list-group-item">Primer aparicion: <span class="aparicion1"></span></li>
        <li class="list-group-item">Altura: <span class="altura"></span></li>
        <li class="list-group-item">Peso: <span class="peso"></span></li>
        <li class="list-group-item">Alianza: <span class="alianza"></span></li>
      </ul>
    `
  } 
}

const data1 = new Usuario('card-data-1')



  if (data1.total.textContent == '' || data2.total.textContent == '') {
    return;
  }
/*
  let msj = ''
  const total_num1 = parseInt(data1.total.textContent)
  const total_num2 = parseInt(data2.total.textContent)
  
  if (total_num1 > total_num2) {
    msj = 'Gana el usuario 1'
  } else if (total_num1 < total_num2) {
    msj = 'Gana el usuario 2'
  } else {
    msj = 'Hay un empate!!!'
  }

  Swal.fire(
    'Resultado de la Batalla',
    msj,
    'success'
  )
*/