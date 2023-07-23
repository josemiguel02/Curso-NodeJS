const http = require('http')
const fs = require('fs')
const path = require('path')

let usersArray = []
const usersPath = path.join(__dirname, 'users.json')

fs.readFile(usersPath, 'UTF-8', (err, users) => {
  if (err) throw err
  usersArray = JSON.parse(users)
})

function writeRes(res, data) {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(data))
}

const routes = {
  '/': (req, res) => {
    writeRes(res, usersArray)
  },
  '/users-lastname': (req, res) => {
    const usersLastnames = usersArray.map(user => user.last_name)
    writeRes(res, usersLastnames)
  },
  '/users-email': (req, res) => {
    const usersEmails = usersArray.map(user => user.email)
    writeRes(res, usersEmails)
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
