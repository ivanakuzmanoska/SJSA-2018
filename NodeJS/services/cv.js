var express = require('express');     // go povikuva express
var bodyParser = require('body-parser');
var jwt = require('express-jwt');
var fileUpload = require('express-fileupload');
var mongo = require('./db/mongo');  // file za konekcija do baza , logika

var auth = require('./handlers/auth');  //files vo koi gi stavuvame hendelite odnosno end points.


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
        { url: '/films', methods: ['POST', 'GET']},
        { url: '/upload', methods: ['POST']},
    ]
    })
);



app.get('/', root);


app.post('/cv', cv.createCV);
app.put('/cv/:id', cv.updateCVById);
app.delete('/cv/:id', cv.deleteCVById);
app.get('/cv', cv.getAllCVs);
app.get('/cv/:id', cv.getCVById);


app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
      res.status(401).send('Invalid token...');
    }
  });


app.listen(8080);