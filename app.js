const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World! ' + `${process.arch}`);
}

const server = http.createServer(requestListener);
server.listen(2727, () => { console.log("2727 running") });