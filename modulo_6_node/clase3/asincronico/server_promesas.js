const express = require('express')
const fs = require('fs').promises

const app = express()

//para usar archivos estaticos
app.use(express.static('public'))

// para leer datos de form

app.use(express.json());
app.use(express.urlencoded());

function getForm (req){
  return new Promise((res, rej)=>{
    let str = ''
    req.on ('data', function (chunk){
      str += chunk
    })
    req.on ('end', function (){
      console.log('str', str);
      const obj =JSON.parse(str)
      res(obj)
    })
  })
}

//Rutas
app.get ('/crear', async(req, res) =>{
  //1.- recuperamos datos de formulario
  const nombre = req.query.nombre
  const contenido = req.query.contenido

  const hoy = new Date()
  // 2. creamos el nuevo archivo
  await fs.writeFile(`archivos/${nombre}.txt`, `${hoy}\n${contenido}`, 'utf-8')
  // 3. retornamos una respuesta al usuario
  res.send('Archivo creado')

})

app.get ('/leer', async(req, res) =>{
//1.- recuperamos datos de formulario
  const nombre = req.query.nombreLeer

//2.- leemos archivo
  let contenido = await fs.readFile(`archivos/${nombre}.txt`, 'utf8')
// agregamos saltos de linea
  contenido = contenido.split('\n').join('<br>')

//3.-  retornamos una respuesta al usuario 
  res.send(contenido)

})

app.get ('/renombrar', async(req, res) =>{
  //1.- recuperamos datos de formulario
    const nombreUno = req.query.nombreViejo
    const nombreDos = req.query.nombreNuevo
  
  //2.- cambiamos nombre a archivo
    await fs.rename(`archivos/${nombreUno}.txt`,`archivos/${nombreDos}.txt`,'utf8')
  
  //3.-  retornamos una respuesta al usuario 
    res.send('Archivo renombrado exitosamente')
  
  })

  app.get ('/eliminar', async(req, res) =>{
    //1.- recuperamos datos de formulario
      const nombre = req.query.nombrEliminar
        
    //2.- cambiamos nombre a archivo
      await fs.readFile(`archivos/${nombreUno}.txt`,'utf8')
    
    //3.-  retornamos una respuesta al usuario 
      res.send('Eliminado exitosamente')
    
    })


app.get('*', (req, res) => {
res.send('Página aún no implementada')
});

app.listen(3000, function () {
console.log('servidor ejecutando correctamente');
})


/*

app.post ('/crear-ajax', async(req, res) =>{
// 0. Recuperamos el formulario
const form = await getForm(req)

// 1. recuperar los datos del formulario
const nombre = form.nombre
const contenido = form.contenido

const hoy = new Date()
// 2. creamos el nuevo archivo
await fs.writeFile(`archivos/${nombre}.txt`, `${hoy}\n${contenido}`, 'utf-8')
// 3. retornamos una respuesta al usuario
res.send('Archivo creado')
})
*/
