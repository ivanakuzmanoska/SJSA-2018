var express = require('express');     // go povikuva express
var auth = require('./handlers/auth');
var root = require('./handlers/root');
var users = require('./handlers/users');


var mongoose = require('mongoose');

const options = {
    useNewUrlParser: true
}

var db = mongoose.connect('mongodb://127.0.0.1:27017/semos1',options);
console.log(db);

var app = express();

app.get('/', root);

app.post('/login', auth.login);
app.get('/logout', auth.logout);

app.get('/users', users.getAllUsers);
app.listen(8080);