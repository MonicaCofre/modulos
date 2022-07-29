/*Crear un servidor NodeJS
-debe retornat un animal del horoscopo chinoi al azar y el dia de la semana de la consulta( Moni - Lunes )
*/

const http = require('http')
const moment = require('moment')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {

  const ahora = moment().format('dddd') 

  const animales = ['rata', 'búfalo', 'tigre', 'conejo', 'mono', 'cabra', 'dragón', 'serpiente', 'caballo', 'gallo', 'perro', 'cerdo']
  //for(let i = 0; i> animales; i++){
  let animal = animales[Math.floor(Math.random() * animales.length)];


  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end(`elejido ${animal} el día  ${ahora}`)
})
server.listen(port, hostname, () => {
  console.log(`Servidor corriendo en  http://${hostname}:${port}/`)
})
