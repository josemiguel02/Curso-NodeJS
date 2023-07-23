const http = require('http')
const fs = require('fs')
const path = require('path')

function getPath(filePath) {
  return path.join(__dirname, 'public', filePath)
}

const server = http.createServer((req, res) => {
  console.log(`${req.method} -> ${req.url}`)

  if (req.url === '/') {
    const htmlPath = getPath('index.html')

    fs.readFile(htmlPath, 'UTF-8', (error, html) => {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.end(html)
    })
  } else if (req.url.match(/.css$/)) {
    const cssPath = getPath(req.url)
    const cssStream = fs.createReadStream(cssPath, 'UTF-8')

    res.writeHead(200, { 'Content-Type': 'text/css' })
    cssStream.pipe(res)
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' })
    res.end('Error 404 Not Found.')
  }
})

server.listen(3000)
console.log('🌍 Servidor Iniciado: http://localhost:3000')
