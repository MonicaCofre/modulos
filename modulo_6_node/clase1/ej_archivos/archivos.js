const fs = require('fs');

function escribir (){
  const dias_semana = `
  lunes
  martes
  miercoles
  jueves
  viernes
  `
  fs.writeFile('datos.txt', dias_semana, 'utf8', function(){
    console.log('archivo escrito correctamente');
  })
  console.log('terminando de escribir');
}


function leer (){
    fs.readFile('datos.txt', 'utf8', function(err, datos){
    console.log(datos);
  })
  console.log('terminando ejecucion');
}

function renombrar(){
  fs.rename('datos.txt', 'dias.txt', function(){
    console.log('renombrado')
  })
}

function eliminar(){
  fs.unlink('dias.txt',function(){
    console.log('eliminado')
  })
}




//escribir();
//leer();
//renombrar();
eliminar();