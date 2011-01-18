var http = require('http'),
  sys = require('sys'),
  fs = require('fs');

http.createServer(function(req, res) {
  log(req);

  if (req.headers.accept && req.headers.accept == 'text/event-stream') {
    if (req.url == '/events') {
      res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache'
      });
      
      //res.write('retry: 30000\n');
      res.write('data: ' + (new Date()) + '\n\n');
      res.end();
    } else {
      res.writeHead(404);
      res.end();
    }
  }
}).listen(4002);
console.log('SSE Server running at http://127.0.0.1:4002');

function log(req) {
  sys.puts('URL: ' + req.url);
  for (var key in req.headers) {
    sys.puts(key + ': ' + req.headers[key]);
  }
  sys.puts('\n\n');
}

