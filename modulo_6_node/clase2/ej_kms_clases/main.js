const child_process = require('child_process')

child_process.exec('node kms_inicial.js', function(err, res1){
  const kms = Number(res1)

  child_process.exec('node consumo.js', function(err2, res2){
    const consumo = Number(res2)

    const precio = ((kms / consumo) * 1250);

    console.log(`el gasto final es ${precio}`)
  })
})


// arriba es callback  (podriamos haber puesto el precio en otro archivo...)




// abajo es lo mismo con promesas 

function ejecutar(nombre_archivo){
  // a las promesas se les pasa una function que resiva callback en caso de que este bresuelta o este mala
  return new Promise((resolve, reject) => {
    child_process.exec(nombre_archivo, function (err, result){
      if(err){
        return reject(err)
      }
      resolve(result)
    })
  })
}

(async function () {
  const distancia = parseInt(await ejecutar('kms_inicial.js'))
  const consumo = parseInt(await ejecutar('consumo.js'))
  console.log(`el gasto final es ${(distancia/consumo)* 1200}`)
})()