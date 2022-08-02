//console.log('el pronostico para temuco es de 13')
//console.log(process.argv)

const axios = require('axios')

const nombre_estacion = process.argv[3]
// priomero chequeo que el ususario mando un nombre para la estacion 
  if (nombre_estacion == undefined){
    console.log('Debe especificar el nombre de la estacion')
    process.exit(1) // con esto termina el proceso 
  }

async function getClima(nombre_estacion){
  console.log(`obteniendo los datos ${nombre_estacion}`);
  // 1. obtenemos los datos de todas estaciones
  const respuesta = await axios.get('http://api.gael.cloud/general/public/clima')
 // axio es una libreia que funciona igual que fetch, pero no es necesario desempaquetar api
   //console.log(respuesta)

  const estaciones = respuesta.data // la respuesta es un array 
  //console.log(estaciones)

  // 2. buscamos la estacion que nos interesa
  // const estacion = estaciones.find(criterio_busqueda)
  const estacion = estaciones.find(est => est.Estacion == nombre_estacion)
  
  // 3. chequeamos si estacion no existiese
  if(estacion == undefined){
    console.log('estacion no existe')
    process.exit(1)
  }


  // 4. Retornamos los datos del clima al usuario
  console.log(`la temperatuta en ${nombre_estacion} es de ${estacion.Temp}  y su humedad es de ${estacion.Humedad}% `)

}
 getClima(nombre_estacion)




 // node clima.js estacion 'Puerto Montt'