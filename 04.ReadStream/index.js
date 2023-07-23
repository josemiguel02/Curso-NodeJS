const { createReadStream } = require('fs')

const stream = createReadStream('./files/prueba.txt', 'UTF-8')
let data = ''

stream.once('data', () => {
  console.log('Iniciando Stream...')
})

stream.on('data', chunk => {
  data += chunk
})

stream.on('end', () => {
  console.log('Fin del Stream.')
  console.log(data.length)
})
