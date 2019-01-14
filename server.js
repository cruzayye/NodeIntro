var http = require('http');
var url = require('url');

// http.createServer((request, response) => {
//   console.log('wating');
//   response.writeHead(200, { 'Content-Type': 'text/plain' });
//   response.write('Hello');
//   response.end();
// }).listen(8888);
// console.log('server has started');

// or 


function start(route) {
  function onRequest(request, response) {
    var pathName = 
    url.parse(request.url).pathName;
    console.log(`Request for ${pathName} received.`);
    route(pathName);

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello World');
    response.end();
  }
  
  http.createServer(onRequest).listen(8888);
  console.log('server has started');

}



exports.start = start;

