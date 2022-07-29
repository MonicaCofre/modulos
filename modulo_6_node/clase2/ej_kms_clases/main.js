const child_process = require('child_process')

child_process.exec('node kms_inicial.js', function(err, res1){
  const kms = Number(rest1)

  child_process.exec('node consumo.js', function(err2, res2){
    const consumo = Number(res2)

    const precio = ((kms / consumo) * 1250);

    console.log(`el gasto final es ${precio}`)
  })
})





