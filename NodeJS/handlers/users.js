var utils = require("../utils");
var users = require("../models/users");
var bcrypt = require("bcrypt");
var validator = require("fastest-validator");

var getAllUsers = (req, res) => {
    users.getAllUsers((err, data) => {
        if(err){
            res.status(500).send("Interval server error! " + err);
        }
        else {
            res.send(data);
        }
    });
};


var getUserByName = (req, res) => {  
    var name = req.params.name;
    users.getUsersByName(name,(err, data) => {
        if(err){                                                           //cb funkija koja ke se izvri otkako ke dobijam odgovor od baza 
            res.status(500).send("Interval server error! " + err);
        }
        else {
            res.send(data);
        }
    })
};


var getUserById = (req, res) => {
    var id = req.params.id;
    users.getUserById(id, (err, data) => {
        if(err){
            res.status(404).send("Not found");
        } else {
            res.send(data);
        }
    });
}

var createUser = (req, res) => {
    // var valid = req.body.firstname != undefined && req.body.firstname != ""
<<<<<<< HEAD
    //              &&  req.body.lastname != undefined && req.body.lastname != ""
    //              &&  req.body.email != undefined && req.body.email != ""
    //              &&  req.body.password != undefined && req.body.password != ""
    // var valid =!utils.isEmpty(req.body.firstname)
    //             && !utils.isEmpty(req.body.lastname)
    //             && !utils.isEmpty(req.body.email)
=======
    //             && req.body.lastname != undefined && req.body.lastname != ""
    //             && req.body.email != undefined && req.body.email != ""
    //             && req.body.password != undefined && req.body.password != "";
    // var valid = !utils.isEmpty(req.body.firstname) 
    //             && !utils.isEmpty(req.body.lastname) 
    //             && !utils.isEmpty(req.body.email) 
>>>>>>> c6d47443853c40c65e06b6e52bfec11c6ec4e217
    //             && !utils.isEmpty(req.body.password);

    var schema = {
        firstname: {type: 'string', empty: false},
        lastname: {type: 'string', empty: false},
        email: {type: 'email', empty: false},
        password: {type: 'string', min: 8, max: 16, empty: false}
    }

<<<<<<< HEAD
    let v = validator();
    var valid = v.validator(req.body, schema);

     if(valid === true) {
         users.getUserByEmail(req.body.email, (err, data) => {
             if (err) {
                 return res.send(err);
             }  else {
                 if (data == null) {
         bcrypt.hash(req.body.password, 10, (err, hash) =>{
             var userData = req.body;
             userData.password = hash;
             userData.role = 'user';
             users.createUser(req.body, (err) => {
                if(err){
                 res.send(err);
                  } else {
                   res.status(201).send("OK");
                  }
              });
           });
    } else {
          res.status(400).send("User exist")
         }
=======
    let v = new validator();
    var valid = v.validate(req.body, schema);

    if(valid === true) {
        users.getUserByEmail(req.body.email, (err, data) => {
            if (err) {
                return res.send(err);
            } else {
                if (data == null) {
                    bcrypt.hash(req.body.password, 10, (err, hash) => {
                        var userData = req.body;
                        userData.password = hash;
                        userData.role = 'user';
                        users.createUser(userData, (err) => {
                            if(err) {
                                res.send(err);
                            } else {
                                res.status(201).send("OK");
                            }
                        });
                    });
                } else {
                    res.status(400).send("User exists");
                }
            }
        })
    } else {
        res.status(400).send(valid);
>>>>>>> c6d47443853c40c65e06b6e52bfec11c6ec4e217
    }
})
     } else {
         res.status(400).send(valid);
     }
    
 }

<<<<<<< HEAD
 
=======

>>>>>>> c6d47443853c40c65e06b6e52bfec11c6ec4e217
var deleteById = (req, res) => {
    var id = req.params.id;
    users.deleteById(id, (err) => {
        if(err){                                                           //cb funkija koja ke se izvri otkako ke dobijam odgovor od baza 
            res.status(500).send(err)
        }
        else {  
            res.status(204).send("OK");
        }
    });
}

var updateById = (req, res) => {
    var id = req.params.id;
    var userData = req.body;
    users.updateById(id, userData, (err) => {
        if(err){                                                           //cb funkija koja ke se izvri otkako ke dobijam odgovor od baza 
            res.status(500).send(err)
        }
        else {  
            res.status(200).send("OK");
        }
    });
}

module.exports = {
    getAllUsers,
    getUserByName,
    getUserById,
    createUser,
    deleteById,
    updateById
};