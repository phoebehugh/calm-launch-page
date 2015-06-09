var express = require('express');
var port = process.env.PORT || 3000;
var app = express();

var http = require("http");
    server = http.createServer(app)

app.get('/', function(req, res) {
  res.sendfile('app/index.html');
});

app.use(express.static(__dirname + '/app'));

server.listen(port, function() {
  console.log('Calm is on port 3000');
});

