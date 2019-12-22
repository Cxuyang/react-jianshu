const http = require('http')

http.createServer((request, response) => {
  let aa = ["aa", "bb", "cc"]
  response.writeHead(200, {
    'Access-Control-Allow-Origin': '*'
  })
  response.end(JSON.stringify(aa))
}).listen(8888)
console.log('server listening on 8888')
