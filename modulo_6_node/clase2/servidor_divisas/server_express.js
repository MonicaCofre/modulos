const express = require ('express')
const axios = require('axios')

const app = express()

app.use(express.static('public'))

//app.get(RUTA, FUNCTION_RESPUESTA)  POST PUSH DELETE listen

app.get('/', (req, res)=>{
  res.send (`
  <html>    
    <h2>Servicio caído</h2>  
  </html>
  `)
}) 

app.get('/api', (req, res)=>{
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
  res.json(respuesta)
}) 

app.get('/api/dolar', (req, res)=>{
  respuesta = {
    hoy: 950,
    ayer: 950,
    anteayer: 'muy caro'
  }
  res.json(respuesta)
})

app.get('/api/clima', async (req, res)=>{
  const data= await axios.get('https://api.gael.cloud/general/public/clima')
    res.json(data.data)
})

app.get('*', (req, res) => {
  res.send('Pagina aun no implementada')
});



app.listen(3000, function(){
  console.log('servidor funcionando correctamente');
})
