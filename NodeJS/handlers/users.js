
var users = require("../models/users");

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
    users.createUser(req.body, (err) => {
        if(err){
            res.status(201).send("OK");
        } else {
            res.send(data);
        }
    })
}

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