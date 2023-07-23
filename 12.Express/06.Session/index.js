/*
  @==================================== Session ====================================@
  Una session almacena los datos de sesión en el servidor; sólo guarda el ID de
  sesión en la propia cookie, no los datos de la sesión. De forma predeterminada,
  utiliza el almacenamiento en memoria del servidor, pero se puede configurar para
  almacenar los datos de la sesión en un almacenamiento escalable
  como: mysql, mongodb, etc.

  En conclusion es un espacio en memoria que se puede compartir entre multiples
  paginas de toda la aplicacion web.
*/

const express = require('express')
const session = require('express-session')
const MySQLStore = require('express-mysql-session')(session)

const app = express()
const PORT = 5000
const options = {
  host: 'localhost',
  user: 'root',
  password: '',
  port: 3306,
  database: 'prueba_session'
}

const sessionStore = new MySQLStore(options)

// Configurando el middleware de Session
app.use(session({
  key: 'my_cookie',
  secret: 'MY_SECRET@KEY',
  resave: false,
  saveUninitialized: false,
  // Configurando el store para que se guarde la session en la BD
  store: sessionStore
}))

app.get('/', (req, res) => {
  // Creando variables de session
  req.session.nombre = 'José Miguel'
  req.session.edad = 23
  req.session.visitas = req.session.visitas ? ++req.session.visitas : 1

  console.log(req.session)

  res.send(`
    <h1>Nombre: ${req.session.nombre}</h1>
    <h1>Edad: ${req.session.edad}</h1>
    <p>Visitas: ${req.session.visitas}</p>
  `)
})

app.listen(PORT, () => {
  console.log(`Servidor Iniciado en -> http://localhost:${PORT}`)
})
