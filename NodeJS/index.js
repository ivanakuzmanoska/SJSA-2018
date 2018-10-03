var express = require('express');     // go povikuva express
var bodyParser = require('body-parser')

var mongo = require('./db/mongo');  // file za konekcija do baza , logika

var auth = require('./handlers/auth');  //files vo koi gi stavuvame hendelite odnosno end points.
var root = require('./handlers/root');  //url so dr ime se vikaat end points
var users = require('./handlers/users');    // sekoj end point mora da ima funkicja otkako ke se otide a toj url

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
app.use(bodyParser.json());

app.get('/', root);

app.post('/login', auth.login);
app.get('/logout', auth.logout);

app.get('/users', users.getAllUsers);
app.get('/users/name/:name',users.getUserByName); //ekspresot primetuva deka ima takvo url , stom nekoj odi na toa url togas povikaj mi ja taa funkcija. taa funkicja se naga vo var userss koja e def gore. i ke oide vo filot users koj se naoga vo handlers .
app.get('/users/:id', users.getUserById);
app.post('/users', users.createUser);
app.delete('/users/:id', users.deleteById);
app.put('/users/:id', users.updateById);


app.listen(8080);