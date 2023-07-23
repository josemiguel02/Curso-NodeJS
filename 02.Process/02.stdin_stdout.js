/*
  process.stdout -> La propiedad process.stdout devuelve un Writable Stream equivalente o
  asociado con stdout.
*/
process.stdout.write('Ingresa tu nombre: ')


/*
  process.stdin -> La propiedad process.stdin devuelve un Readable Stream equivalente o
  asociado con stdin.
*/
process.stdin.on('data', function (data) {
  let nombre = data.toString()

  process.stdout.write(`Tu nombre es: ${nombre}`)
  process.exit()
})
