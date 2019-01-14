var http = require('http');

http.createServer((requiest, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write('Hello');
  response.end();
}).listen(8888);