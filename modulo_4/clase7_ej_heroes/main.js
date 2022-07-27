import { buscar } from "./scrip";

const btn = document.getElementById('btn')
//Capturar la información ingresada mediante eventos del DOM
btn.addEventListener('click', async function () {
  buscar()
})

//crear un constructor 
class Hero {
  // "card_name" es la clase de la 'card' que contiene todo el resto de cosas 
  constructor (card_id) {
    this.nuevoId(card_id)
    
    // etiquetas HTML del usuario
   // this.input = document.querySelector(`.${nuevo_id} .id`)
   // this.btn_buscar = document.querySelector(`.${nuevo_id} #btn`)


  }
//  metodo
  nuevoId (id) {

    const row_users = document.querySelector('.card-body2')
    row_users.innerHTML += `
     
        <ul class="list-group ${card_id}">
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
    this.nombre = document.querySelector(`.${card_id} .name`)
    this.conexiones = document.querySelector(`.${card_id} .conexiones`)
    this.publicado = document.querySelector(`.${card_id} .publicado`)
    this.ocupacion = document.querySelector(`.${card_id} .ocupacion`)
    this.aparicion1 = document.querySelector(`.${card_id} .aparicion1`)
    this.altura = document.querySelector(`.${card_id} .altura`)
    this.peso = document.querySelector(`.${card_id} .peso`)
    this.aliaza = document.querySelector(`.${card_id} .alianza`)
  


this.nombre.textContent = data.name
this.conexiones.textContent = data.connections.group-affiliation
this.publicado.textContent = data.biography.publisher
this.ocupacion.textContent = data.work.occupation
this.aparicion1.textContent = data.biography.first-appearance
this.altura.textContent = data.appearance.height[1]
this.peso.textContent = data.appearance.weight[1]
this.aliaza.textContent = data.biography.aliases

}