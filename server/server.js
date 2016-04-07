var express = require('express');
var path = require('path');

var app = express();

// TODO setup connection to database

// configure server with routess
require('./config/routes.js')(app, express);

app.listen(8000, function () {
  console.log('Example app listening on port 8000!');
});