const http = require('http')
const fs = require('fs')
const qs = require('querystring')

const routes = {
  '/': (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.createReadStream(__dirname + '/form.html').pipe(res)
  },
  '/form-submit': (req, res) => {
    let body = ''

    req.on('data', chunk => (body += chunk))
    req.on('end', () => {
      const parseQS = qs.parse(body)
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify(parseQS))
    })
  }
}

const server = http.createServer((req, res) => {
  if (req.url in routes) {
    routes[req.url](req, res)
    return
  }

  res.writeHead(404, { 'Content-Type': 'text/plain' })
  res.end('Error 404 Not Found.')
})

server.listen(3000)
console.log('Servidor en -> http://localhost:3000')
