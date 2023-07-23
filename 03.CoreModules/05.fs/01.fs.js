/*
  ?================================= FS (File System) =================================?
  El módulo fs permite interactuar con el sistema de archivos en una forma modelada
  en funciones POSIX estándar.
*/

const fs = require('fs')

/*
  fs.readdirSync() -> Lee el contenido del directorio (raíz) de manera síncrona.
  Y devuelve un array de strings con los nombres de ellos.
*/
const directorio = fs.readdirSync('./')
// console.log(directorio)


/*
  fs.readdir() -> Funciona igual a fs.readdirSync() pero de manera asíncrona.
*/
fs.readdir('./', (error, archivos) => {
  if (error) throw error

  console.log(archivos)
})


/*
  fs.readFile() -> Lee de forma asíncrona todo el contenido de un archivo.
*/
fs.readFile('./files/archivo.txt', 'UTF-8', (error, data) => {
  if (error) throw error

  console.log(data)
})


const archivo = './files/prueba.txt'
const contenido = 'Este es el contenido de un archivo de texto plano.'

/*
  fs.writeFile() -> Escribe datos de forma asíncrona en un archivo, reemplazando
  si ya existe. Puede ser una cadena o un búfer.
*/
fs.writeFile(archivo, contenido, (error) => {
  if (error) throw 'Hubo un error al escribir en el archivo.'

  console.log('Se ha escrito en el archivo.')
})


const contenido2 = '\nAquí va otra línea de texto plano.'

/*
  fs.appendFile() -> Agrega datos de forma asíncrona a un archivo, creando
  el archivo si aún no existe. Puede ser una cadena o un búfer.
*/
fs.appendFile(archivo, contenido2, (error) => {
  if (error) throw 'No se pudo agregar datos en el archivo.'

  console.log('Se ha agregado datos en el archivo.')
})
