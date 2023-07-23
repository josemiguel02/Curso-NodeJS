/*
  #==================================== Template Engine ====================================#
  Un Template Engine (motor de plantillas) nos ayuda a crear una plantilla HTML con un
  código mínimo. Además, puede inyectar datos en la plantilla HTML con el fin de
  generar un documento que será renderizado en el navegador.
  Algunos de los Template Engines más conocidos son:
   - EJS
   - Pug
   - Handlebars (hbs)
*/

const express = require('express')
const path = require('path')
// Importamos el Template Engine Handlebars
const { create } = require('express-handlebars')

const app = express()
const PORT = 5000

// Configuramos la extensión
const hbs = create({ extname: '.hbs' })

// Indicamos el Template Engine que vamos a utilizar
app.engine('.hbs', hbs.engine)
app.set('view engine', '.hbs')

// Establecemos el directorio donde se encuentran los archivos (.hbs)
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
  // Renderizamos la plantilla mediante la función .render(templateName)
  res.render('home', { layout: false, name: 'HBS' })
})

app.listen(PORT, () => {
  console.log(`Servidor Iniciado en -> http://localhost:${PORT}`)
})
