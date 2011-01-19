var path = require('path'),
  fs = require('fs'),
  http = require('http'),
  paperboy = require('./libs/paperboy.js'),

  PORT = 4000,
  WEBROOT = path.join(path.dirname(__filename), 'public_html');

http.createServer(function(req, res) {
  // server sent events
  if (req.headers.accept && 
      req.headers.accept == 'text/event-stream' && 
      req.url == '/events') {
    handle_sse(req, res);

  //serve static files
  } else {
    paperboy.deliver(WEBROOT, req, res);
  }
}).listen(PORT);
console.log('Server running at http://127.0.0.1:'+ PORT);


function handle_sse(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache'
  });
  
  //res.write('retry: 30000\n');
  res.write('data: ' + (new Date()) + '\n\n');
  res.end();
}
