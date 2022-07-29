const fs = require('fs').promises
const http = require('http')
const moment = require('moment')

const hostname = '127.0.0.1'
const port = 3000

let fecha;
let contenido;
  async function leer (){   
    contenido= await fs.readFile('homero.txt', 'utf8')
    //console.log(contenido);
    //contenido = contenido[Math.floor(Math.random() * contenido.length);
    contenido = contenido.split('\r\n')
  }
  leer()

const server = http.createServer((req, res) => {
  fecha = moment().format('MMMM Do YYYY, h:mm:ss') 
  const cont_azar = contenido[Math.floor(Math.random() * contenido.length)]
  
 
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end(`<h2> Frase elejida : ${cont_azar} <br><br> a las ${fecha} </h2>`)
})

server.listen(port, hostname, () => {
  console.log(`Servidor corriendo en  http://${hostname}:${port}/`)
})
