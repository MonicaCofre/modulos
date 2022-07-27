
class Item {
  constructor(nuevaTarea) {
    this.crearDiv(nuevaTarea);
  }
  // método
  crearDiv(nuevaTarea) {
    // se crea Div y se añade a container
    console.log('llamando a crearDiv');
    const nuevoDiv = document.createElement('div')
    nuevoDiv.classList.add('item')
    container.appendChild(nuevoDiv)
    // se crea input y se añade a Div
    const inputItem = document.createElement('input')
    inputItem.value = nuevaTarea                    // Tome el parámetro del constructor para asignarle un valor a la variable inputItem.
    inputItem.type = 'text'
    inputItem.disabled = true                       //Establece la Propiedad disabled de la Variable inputItem con el valor true
    inputItem.classList.add('item-input')
    nuevoDiv.appendChild(inputItem);
    // se crea boton editar con iconos 
    const btnEditar = document.createElement('button')
    btnEditar.innerHTML = "<i class='fas fa-lock'></i>";
    btnEditar.classList.add('boton-editar'); // ??
    nuevoDiv.appendChild(btnEditar);
    // se asigna evento a boton editar
    btnEditar.addEventListener("click", function () {
      if (inputItem.disabled === true) {
        inputItem.disabled = false;
        btnEditar.innerHTML = '<i class="fa-solid fa-lock-open"></i>';
      } else {
        inputItem.disabled = true;
        btnEditar.innerHTML = '<i class="fa-solid fa-lock"></i>';
      };
    })
    // se crea boton remover con iconos 
    const btnRemover = document.createElement('button')
    btnRemover.innerHTML = "<i class='fa-solid fa-trash'></i>";
    btnRemover.classList.add('boton-remover')
    nuevoDiv.appendChild(btnRemover);
    // se asigna evento a boton para eliminar
    btnRemover.addEventListener("click", function () {
      container.removeChild(nuevoDiv)
    })
  }
}