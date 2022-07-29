const fs = require('fs');

function escribir (){
  let productos = ['azucar $1000', 'aceite $2000', 'arroz $1000', 'fideos $1000', 'sopas $1000']
  productos = productos.join('\n')

  fs.writeFile('shopping.txt', productos, 'utf8', function(){
    console.log('archivo escrito correctamente')
    setTimeout(function(){
      leer()
    }, 2000)
  })
  }
escribir()
  
function leer (){
  fs.readFile('shopping.txt', 'utf8', function(err, datos){
    console.log(datos)
    setTimeout(function(){
      renombrar()
    }, 2000)
  })
}


function renombrar(){
  fs.rename('shopping.txt', 'compras.txt', function(){
    console.log('renombrado')
    setTimeout(function(){
      eliminar()
    }, 2000)
  })
}


function eliminar(){
  fs.unlink('compras.txt',function(){
    console.log('eliminado')
    setTimeout(function(){
      console.log('callback terminado')
    }, 2000)
  })
}




