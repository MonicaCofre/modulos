const child_process = require('child_process');
/*
child_process.exec('node distancia.js', function(err, resultado1){
    const distancia = parseInt(resultado1);
    child_process.exec('node consumo.js', function (err, resultado2){
        const consumo = parseInt (resultado2);
        child_process.exec('node precio_bencina.js', function(err, resultado3){
            const precio_bencina = parseInt (resultado3);

            console.log(`El precio total es $${(distancia/consumo)*precio_bencina}`)
        })
    })
})
*/
function ejecutar (nombre_archivo) {
    return new Promise ((resolve, reject) => {
        child_process.exec('node '+nombre_archivo, function (err, result) {
            if (err) {
                return reject(err)
            }
            resolve(result)
        })
    })
}
(async function () {
    const tipo_cambio = parseInt(await ejecutar('moneda.js'))
    const consumo = parseInt(await ejecutar('cosumo.js'))
    const precio_bencina = parseInt(await ejecutar('precio_bencina.js'))
    console.log(distancia);
    console.log(`El precio total es $${(distancia/consumo)*precio_bencina}`)
})()
