var express = require('express');     // go povikuva express
var bodyParser = require('body-parser');
var jwt = require('express-jwt');
var fileUpload = require('express-fileupload');

var mongo = require('./db/mongo');  // file za konekcija do baza , logika

var auth = require('./handlers/auth');  //files vo koi gi stavuvame hendelite odnosno end points.
var root = require('./handlers/root');  //url so dr ime se vikaat end points
var users = require('./handlers/users');    // sekoj end point mora da ima funkicja otkako ke se otide a toj url
var cv = require('./handlers/cvs');
var films = require('./handlers/films');
var upload = require('./handlers/upload')


var mongoose = require('mongoose');


mongo.Init();

var app = express();
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(jwt({ 
        secret: 'pero_e_haker'
    }).unless({
      url: '/upload', methods: ['POST']})
);


app.use(fileUpload({
    limits: {
    fileSize: 50 * 1024 * 1024
 }
}));

app.get('/', root);


app.post('/upload', upload.uploadFile);
app.post('/upload/avatar', upload.uploadAvatar);
app.post('/upload/doc', upload.uploadDoc);

app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
      res.status(401).send('Invalid token...');
    }
  });

