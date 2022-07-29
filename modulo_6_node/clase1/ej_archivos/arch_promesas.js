const fs = require('fs').promises



function createTo(){
  return new Promise((res, rej) => {
    setTimeout(res, 2000)
  })
}


async function escribir (){
  let items = ['manzanas', 'aceite girasol', 'café molido', 'chocolate bitter']

  items = items.join('\n')

  await fs.writeFile('shopping.txt', items, 'utf8')
  
  const contenido= await fs.readFile('shopping.txt', 'utf8')

  console.log(contenido);

  await fs.rename('shopping.txt', 'lista_compras.txt');
  createTo()
  // await fs.unlink('lista_compras.txt');

}

escribir()