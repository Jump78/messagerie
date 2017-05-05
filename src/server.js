var http = require('http');

var server = http.createServer(function(request, result) {
  result.writeHead(200);
  result.end('Salut tout le blbl !');
});
server.listen(8000);