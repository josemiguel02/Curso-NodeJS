const http = require('http')

const options = {
  hostname: 'jsonplaceholder.typicode.com',
  path: '/posts',
  method: 'GET'
}

/*
  http.request() -> Devuelve una instancia de la clase ClientRequest.
  La instancia de ClientRequest es un flujo grabable.

  NOTA: Se usa para hacer solicitudes HTTP.
*/
const request = http.request(options, response => {
  console.log('Status Code ->', response.statusCode)
  console.log('Headers ->', response.headers)

  let body = ''

  response.on('data', chunk => {
    body += chunk
  })

  response.on('end', () => {
    console.log('Data ->', JSON.parse(body))
  })
})

request.on('error', error => console.error(error))
request.end()
