var express = require('express');     // go povikuva express
var auth = require('./handlers/auth');
var root = require('./handlers/root');

var app = express();

app.get('/',root);

app.post('/login', auth.login);
app.get('./logout', auth.logout);

app.listen(8080);