/*
  *================================== Process (Procesos) ==================================*
  El objeto process proporciona información y control sobre el proceso actual de NodeJS.
*/

console.log(process)

/*
  Devuelve una matriz que contiene la línea de comandos de argumentos pasados cuando se
  inició el proceso de Node.js.
*/
console.log(process.argv)


/*
  Devuelve un objeto que contiene el entorno de usuario.
*/
console.log(process.env)


/*
  El método indica a Node.js que termine el proceso sincrónicamente con un estado de salida.
*/
process.exit(1)
