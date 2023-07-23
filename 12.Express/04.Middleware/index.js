/*
  @==================================== Middleware ====================================@
  Los middlewares son códigos que se ejecutan antes de que una petición (solicitud) HTTP
  llegue al manejador de rutas o antes de que un cliente reciba una respuesta,
*/

const express = require('express')

const app = express()

// Ejemplo de Middleware
function myMiddleware(req, res, next) {
  // Se ejecuta antes de que el servidor responda al cliente.
  console.log('Fecha actual:', new Date().toLocaleDateString())
  next()
}

function genericMiddleware(req, res, next) {
  console.log('Generic Middleware')
  next()
}

// Podemos usar un Middleware para que se ejecute en todas las rutas de la app.
app.use(genericMiddleware)

// O usamos el Middleware en una ruta específica.
app.get('/', myMiddleware, (req, res) => {
  res.send('Waoo!!')
})

app.get('/greeting', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log('Servidor iniciado en -> http://localhost:3000')
})
