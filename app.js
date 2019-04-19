var express = require('express');
var chalk = require('chalk');

var app = express();

app.get('/', function(req, res) {
  res.send('Hello from Library app');
});

app.listen(3000, function() {
  console.log(`Listening on port ${chalk.green('3000')}`);
});
