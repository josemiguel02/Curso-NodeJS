// Importamos Express
const express = require('express')

// Ejecutamos Express y lo guardamos en una constante
const server = express()

// Llamamos al método listen y le indicamos el puerto en que se va a ejecutar.
server.listen(3000, () => {
  console.log('Servidor Iniciado en -> http://localhost:3000')
})
