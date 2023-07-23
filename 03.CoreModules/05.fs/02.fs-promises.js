/*
  El módulo fs/promises funciona igual que el módulo fs, pero utilizando Promesas.
*/
const fs = require('fs/promises')

const archivo = './files/db.json'
const datos = [
  {
    name: 'Jose',
    age: 22
  },
  {
    name: 'Bob',
    age: 50
  }
]

fs.writeFile(archivo, JSON.stringify(datos))
  .then(() => console.log('Se ha escrito en el archivo json.'))
  .catch(error => console.error(error))


fs.readFile(archivo, 'UTF-8')
  .then(data => console.log(data))


/*
  fs.rename() -> Cambia el nombre de un archivo por otro.
*/
fs.rename(archivo, './files/database.json')
  .then(() => console.log('El archivo ha sido renombrado.'))


/*
  fs.rm() -> Elimina archivos y directorios.
*/
fs.rm('./files/database.json')
  .then(() => console.log('El archivo ha sido eliminado..'))
