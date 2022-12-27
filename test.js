var http = require('http');

http.createServer(function (req, res) {
    req.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
      });
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('');
}).listen(7777);