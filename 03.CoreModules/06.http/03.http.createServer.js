const http = require('http')

/*
  http.createServer() -> Devuelve una nueva instancia de Server.
  El requestListener es una función que se agrega automáticamente al evento 'request'.
*/
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end('<h1>Hola desde mi Server!</h1>')
})

server.listen(3000)
console.log('🌍 Servidor Iniciado: http://localhost:3000')
