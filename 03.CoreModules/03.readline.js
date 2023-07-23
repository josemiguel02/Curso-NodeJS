/*
  -=================================== Readline ===================================-
  El módulo readline proporciona una interfaz para leer datos de un flujo legible
  (como process.stdin) una línea a la vez.
*/

const readline = require('readline')


/*
  readline.createInterface() -> Crea una nueva instancia de readline.Interface.
*/
const rl = readline.createInterface(process.stdin, process.stdout)

const persona = {
  nombre: '',
  comentarios: []
}


/*
  rl.question() -> Espera a que se proporcione la entrada del usuario y, a continuación,
  invoca la función que pasa la entrada proporcionada como primer argumento.
*/
rl.question('Cuál es tú nombre? ', respuesta => {
  persona.nombre = respuesta

  /*
    rl.setPrompt() -> Establece el mensaje en el que se escribirá cada vez que se
    llame rl.prompt().
  */
  rl.setPrompt('Deja un comentario: ')
  rl.prompt()
})


/*
  rl.on('line') -> El evento se emite siempre que el flujo recibe una entrada de
  final de línea.
*/
rl.on('line', input => {
  const { nombre, comentarios } = persona

  if (input.trim() === 'exit') {
    const msg = `Te llamas ${nombre} y tus comentarios son: ${JSON.stringify(comentarios)}`
    console.log(msg)

    process.exit()
  }

  comentarios.push(input.trim())
  rl.setPrompt('Deja un comentario: ')
  rl.prompt()
})
