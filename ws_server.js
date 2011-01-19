var ws = require("./libs/ws");

ws.createServer(function (ws) {
  ws.addListener("connect", function (resource) { 
    // emitted after handshake
    console.log("connect: " + resource);

    // server closes connection after 3 min, will also get "close" event
    setTimeout(ws.end, 10 * 60 * 1000); 
  }).addListener("data", function (data) { 
    // handle incoming data
    console.log(data);

    // send data to client
    ws.write(data);
  }).addListener("close", function () { 
    // emitted when server or client closes connection
    console.log("close");
  });
}).listen(4001);
console.log('Web Socket Server running at http://127.0.0.1:4001');
