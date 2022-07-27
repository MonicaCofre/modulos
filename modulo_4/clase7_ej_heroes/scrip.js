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

