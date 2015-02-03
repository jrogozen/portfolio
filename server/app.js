'use strict';

var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '../client'));
app.use(express.static(__dirname + '../static'));

require('./routes')(app);

app.listen(8080);
console.log('server started on port 8080');

exports = module.exports = app;