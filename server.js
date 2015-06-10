var express = require('express');
var port = process.env.PORT || 3000;
var app = express();
var mcapi = require('./node_modules/mailchimp-api/mailchimp');

var bodyParser = require('body-parser');
app.use(bodyParser());

var http = require("http");
    server = http.createServer(app);

mc = new mcapi.Mailchimp('27def3c561ff6cfcbae035c9f4c3037e-us11');

app.get('/', function(req, res) {
  res.sendfile('app/index.html');
});

app.post('/signup', function(req, res) {
  mc.lists.subscribe( { id: '43b3698448', email: { email:req.body.email } }, function(data) {
    console.log(data);
    console.log('added to list');
  });
  res.send('OK');
});

app.use(express.static(__dirname + '/app'));

server.listen(port, function() {
  console.log('Calm is on port 3000');
});

