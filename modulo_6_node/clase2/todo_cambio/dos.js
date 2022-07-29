const axios = require('axios')
const fs = require('fs')

const nombre_text = process.argv[2] //nombre de archivo
const nombre_ext = process.argv[3] //nombre de extension 
const tipo_cambio = process.argv[4] //tipo de cambio
const cantidad = process.argv[5] // cantidad a transformar

if(nombre_text == undefined ||
  nombre_ext == undefined ||
  tipo_cambio == undefined ||
  cantidad == undefined){
    console.log('ingresar consulta completa')
    process.exit(1)
}


async function getDatos(nombre_text, nombre_ext, tipo_cambio, cantidad){
  console.log('conectando api...')
  const res = await axios.get ('https://mindicador.cl/api')
  const hoy = new Date()

  //const dolarActual = res.data.dolar.valor  
  //const cantidad = 250000
  const tipo = res.data[tipo_cambio].valor
  console.log(tipo) // 941.03

  const total = (cantidad / tipo).toFixed(2)
  //console.log('total' + total)


  const frase = `A la fecha: ${hoy} fue realizada cotización con los siguientes
  datos:
  Cantidad de pesos a convertir: ${cantidad} pesos
  Convertido a "dólar" da un total de:
  $${total}.- `

  function escribir(frase){
    fs.writeFile(`'${nombre_text}.${nombre_ext}'`, frase,'utf-8', function(){
      setTimeout(()=> { leer()}, 2000)
    })
  }
  function leer(){
    fs.readFile(`'${nombre_text}.${nombre_ext}'`, 'utf-8', function(err, contenido){
      console.log(contenido)       
    })
  }

  //console.log('dolar ', res.data.dolar.valor)
  //console.log(frase);
  escribir(frase)
}
getDatos(nombre_text, nombre_ext, tipo_cambio, cantidad);