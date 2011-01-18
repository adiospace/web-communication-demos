var 
  path = require('path'),
  http = require('http'),
  paperboy = require('./libs/paperboy.js'),

  PORT = 4000,
  WEBROOT = path.join(path.dirname(__filename), 'docs');

http.createServer(function(req, res) {
  paperboy.deliver(WEBROOT, req, res);
}).listen(PORT);
console.log('Server running at http://127.0.0.1:'+ PORT);
