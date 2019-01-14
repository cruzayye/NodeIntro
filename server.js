var http = require('http');

// http.createServer((request, response) => {
//   console.log('wating');
//   response.writeHead(200, { 'Content-Type': 'text/plain' });
//   response.write('Hello');
//   response.end();
// }).listen(8888);
// console.log('server has started');

// or 


function start() {
  function onRequest(request, response) {
    console.log('request received')
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello World');
    response.end();
  }
  
  http.createServer(onRequest).listen(8888);
  console.log('server has started');

}

exports.start = start;

