var express = require('express');     // go povikuva express
var bodyParser = require('body-parser');
var jwt = require('express-jwt');

var mongo = require('./db/mongo');  // file za konekcija do baza , logika

var auth = require('./handlers/auth');  //files vo koi gi stavuvame hendelite odnosno end points.
var root = require('./handlers/root');  //url so dr ime se vikaat end points
var users = require('./handlers/users');    // sekoj end point mora da ima funkicja otkako ke se otide a toj url
var cv = require('./handlers/cvs');
var films = require('./handlers/films')


mongo.Init();

var app = express();
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(jwt({ 
        secret: 'pero_e_haker'
    }).unless({
        path: ['/login', 
        { url:'/login', methods: ['POST']},
        { url: '/users', methods: ['POST']},
        {url: '/films', methods: ['POST', 'GET']},
    ]
    })
);


app.get('/', root);

app.post('/login', auth.login);
app.get('/logout', auth.logout);  // logout(req, res); 

app.get('/users', users.getAllUsers);
app.get('/users/name/:name', users.getUserByName);
app.get('/users/:id', users.getUserById);
app.post('/users', users.createUser);
app.delete('/users/:id', users.deleteById);
app.put('/users/:id', users.updateById);

app.post('/cv', cv.createCV);
app.put('/cv/:id', cv.updateCVById);
app.delete('/cv/:id', cv.deleteCVById);
app.get('/cv', cv.getAllCVs);
app.get('/cv/:id', cv.getCVById);

app.post('/films', films.addFilm);
app.get('/films', films.getAllFilms);

app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
      res.status(401).send('Invalid token...');
    }
  });


app.listen(8080);