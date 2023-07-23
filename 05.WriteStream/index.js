const { createWriteStream } = require('fs')
const { createInterface } = require('readline/promises')

const i = createInterface(process.stdin, process.stdout)

i.question('Cuál es tú nombre? ').then(nombre => {
  const stream = createWriteStream(`./files/${nombre}.txt`)
  stream.write(`${nombre} dijo:\n`)

  i.setPrompt('Qué quieres decir? ')
  i.prompt()

  i.on('line', input => {
    if (input.trim() === 'exit') {
      stream.close()
      i.close()

      return
    }

    stream.write(`- ${input.trim()}\n`)
    i.setPrompt('Qué quieres decir? ')
    i.prompt()
  })
})
