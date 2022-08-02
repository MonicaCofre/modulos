const http = require('http')
const axios = require('axios')

///const moment = require('moment')

const hostname = '127.0.0.1'
const port = 3000

/*
GET  => una pagina 
GET /api => JSON de las divisas
GET /api /dolar => JSON de los datos historicos del dolar 
*/

const server = http.createServer(async (req, res) => {
  //console.log(req, url)

  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')

  let respuesta;
  if (req.url == '/' ){
    respuesta = `
    <html>    
      <h2>Servicio caído</h2>  
    </html>
    `
  } 
  else if (req.url == '/api' ){
    respuesta = {
      fecha: new Date(),
      dolar: {
        indicador: 'Dolar EEUU',
        valor: 950 
      },
      uf: {
        indicador: 'Unidad de fomento',
        valor: 33450 
      } 
    }  
      respuesta = JSON.stringify(respuesta)
    }
    else if (req.url == '/api/dolar' ){
      respuesta = {
        hoy: 950,
        ayer: 950,
        anteayer: 950,
      }
      respuesta = JSON.stringify(respuesta)
    }
    else if (req.url == '/api/clima' ){
      const data= await axios.get('https://api.gael.cloud/general/public/clima')
      console.log(data.data)
      /*  filtrar por ciudad ej temuco
      const temuco = data.data.find(obj => obj.Estacion == 'Temuco') || {no:'encontrado'}
      respuesta = JSON.stringify(temuco)
      */
      respuesta = JSON.stringify(data.data)


    }


    else{
      respuesta = 'ruta no implementada'
    }  
    
  res.end(respuesta)
})

server.listen(port, hostname, () => {
  console.log(`Servidor corriendo en  http://${hostname}:${port}/`)
})