var express = require('express');     // go povikuva express

var mongo = require('./db/mongo');

var auth = require('./handlers/auth');
var root = require('./handlers/root');
var users = require('./handlers/users');


var mongoose = require('mongoose');

const options = {
    useNewUrlParser: true
}

mongoose.connect('mongodb://127.0.0.1:27017/semos1', options)
.then((conn) => {
    console.log(conn);
})
.catch((err) => {
    console.log(err);
})

mongo.Init();

var app = express();

app.get('/', root);

app.post('/login', auth.login);
app.get('/logout', auth.logout);

app.get('/users', users.getAllUsers);
app.get('/users/name/:name', users.getUserByName);


app.listen(8080);