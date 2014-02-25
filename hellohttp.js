/**
via http://nodejs.org/api/synopsis.html
run:
node <thisfile>

see also:

http://nodejs.org/api/http.html
http://www.nodebeginner.org/index-zh-cn.html
*/

var http = require('http');

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World\n');
}).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');