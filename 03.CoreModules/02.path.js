/*
  *=================================== Path ===================================*
  El módulo path proporciona utilidades para trabajar con rutas de archivos y
  directorios. Se puede acceder a ella mediante: path
*/

// Importamos el módulo path
const path = require('path')

/*
  path.basename() -> Devuelve la última parte de una ruta.
  Los separadores de directorios finales se omiten.

  A menudo se usa para extraer el nombre del archivo de una ruta completa.
*/
let nombreBase = path.basename('/foo/bar/baz/index.html')
console.log(nombreBase)

// Pasamos un 2do argumento para quitar la extensión de un archivo.
let nombreBase2 = path.basename('/foo/bar/baz/app.js', '.js')
console.log(nombreBase2)


/*
  path.dirname() -> Devuelve el nombre de directorio de una ruta.
*/
let nombreDir = path.dirname('/foo/baz/asdf/hi')
console.log(nombreDir)


/*
  path.extname() -> Devuelve la extensión de la ruta, desde el ultimo '.' al
  final de la cadena en la última parte de la ruta.
*/
let nombreExt = path.extname('/foo/bar/styles.css')
console.log(nombreExt)


/*
  path.join() -> Une todos los argumentos dados utilizando el separador específico
  de la plataforma como delimitador, luego normaliza la ruta resultante.
*/
let rutasUnidas = path.join('foo', 'abc', 'def', 'ghi/jkl')
console.log(rutasUnidas)


/*
  path.resolve() -> Resuelve una secuencia de rutas o segmentos de ruta en una
  ruta absoluta.
*/
let rutasResueltas = path.resolve('foo', 'bar', 'xyz')
console.log(rutasResueltas)
