var express = require('express');
var bodyParser = require('body-parser');
var Rooms = require('./routes/rooms');
const { Users } = require('./routes');

var app = express();

app.use(bodyParser.text());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/rooms', Rooms);
app.use('/users', Users);

module.exports = app;