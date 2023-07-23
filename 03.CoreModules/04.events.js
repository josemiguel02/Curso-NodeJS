/*
  @=================================== Events ===================================@
  Todos los EventEmitters emiten el evento 'newListener' cuando se agregan nuevos
  oyentes y 'removeListener' cuando se eliminan los oyentes existentes.
*/

const EventEmitter = require('events').EventEmitter

class Persona extends EventEmitter {
  constructor(nombre) {
    super()
    this.nombre = nombre
  }
}

const p1 = new Persona('Bob')

p1.on('hablar', (mensaje) => {
  console.log(`${p1.nombre}: ${mensaje}`)
})

p1.emit('hablar', 'Hoy es un gran día!')
