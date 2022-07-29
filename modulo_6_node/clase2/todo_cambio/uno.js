const child_process = require('child_process')

function ejecutar(nombre_archivo){
  return new Promise((resolve, reject)=>{
    child_process.exec('node' + nombre_archivo, function(err, result){
      if (err){
        return reject(err)

      }
      resolve(result)
    })
  })
}

(async function () {
  const cantidad = parseInt(await ejecutar('cantidad.js'))
  const dolar_actual = parseInt(await ejecutar('dolar.js'))

  const consumo = parseInt(await ejecutar('cosumo.js'))
  const precio_bencina = parseInt(await ejecutar('precio_bencina.js'))
  console.log(distancia);
  console.log(`El precio total es $${(distancia/consumo)*precio_bencina}`)

})()
