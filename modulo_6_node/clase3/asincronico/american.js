const express = require('express');
const fs = require('fs')
const app = express();

app.use(express.static('public'));

app.get('/crear', (req, res) => {
    console.log(req.query)
    const hoy =new Date()
    const nombre = req.query.nombre
    const contenido = req.query.contenido

    function crear(){
        fs.writeFile(`archivos/${nombre}.txt`,`${hoy}\n${contenido}`, 'utf8', function(){
            console.log('Archivo creado');
            res.send('archivo creado')
        })
    }
    
    crear();
    console.log('todo ok')    
})

app.get('/leer', (req, res) => {
    const nombre_leer = req.query.nombreLeer
      fs.readFile(`archivos/${nombre_leer}.txt`,'utf8', function (err, datos) {
        console.log(datos);
        res.send(`<h1>${datos}</h1>`)
      })
})

app.get('/renombrar', (req, res) => {
    const viejo = req.query.nombreViejo
    const nuevo = req.query.nombreNuevo

    console.log('Archivo renombrado');
    fs.rename(`archivos/${viejo}.txt`,`archivos/${nuevo}.txt`, function(){
        return res.send('archivo renombrado')
    })

})

app.get('/eliminar', (req, res) => {
    const eliminar = req.query.nombrEliminar
        fs.unlink(`archivos/${eliminar}.txt`, function(){
            console.log('Archivo Eliminado')
            res.send('archivo eliminado')
        })
})

app.listen(3000, function(){
    console.log('Servidor ejecutando')
});