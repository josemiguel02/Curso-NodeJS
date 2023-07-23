/*
  -======================================= Routing =================================-
  El Routing (direccionamiento) hace referencia a la determinación de cómo responde una
  aplicación a una solicitud de cliente en un determinado punto final, que es
  un URI (o una vía de acceso) y un método de solicitud HTTP específico (GET, POST, etc.).
  Cada ruta puede tener una o varias funciones de manejador, que se excluyen
  cuando se correlaciona la ruta.

  La definición de ruta tiene la siguiente estructura:
  app.METHOD(PATH, HANDLER)
*/

const express = require('express')

const server = express()

server.get('/', (req, res) => {
  res.send('Hola desde Express')
})

// Método GET
server.get('/home', (req, res) => {
  res.send('Estas en la ruta: home')
})

// Método POST
server.post('/about', (req, res) => {
  res.send('Estas en la ruta: about')
})

// Método PUT
server.put('/edit', (re, res) => {
  res.send('Edit..')
})

// Método DELETE
server.delete('/delete', (req, res) => {
  res.send('Delete..')
})

server.listen(5000, () => {
  console.log('Servidor Iniciado en -> http://localhost:5000')
})
