var express = require('express');     // go povikuva express
var bodyParser = require('body-parser');
var jwt = require('express-jwt');
var mongo = require('../db/mongo');  // file za konekcija do baza , logika
var users = require('../handlers/users');    // sekoj end point mora da ima funkicja otkako ke se otide a toj url


var mongoose = require('mongoose');

mongo.Init();

var app = express();
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(jwt({ 
        secret: 'pero_e_haker'
    }).unless({

        { url: '/upload', methods: ['POST']},
    })
);

app.get('/users', users.getAllUsers);
app.get('/users/name/:name', users.getUserByName);
app.get('/users/:id', users.getUserById);
app.post('/users', users.createUser);
app.delete('/users/:id', users.deleteById);
app.put('/users/:id', users.updateById);


app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
      res.status(401).send('Invalid token...');
    }
  });

