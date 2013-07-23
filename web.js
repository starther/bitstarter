var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
app.use(express.static('/home/ubuntu/bitstarter'));

app.get('/', function(request, response) {
  fileBuffer = fs.readFileSync('index.html');
  response.send(fileBuffer.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
