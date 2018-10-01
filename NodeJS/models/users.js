var mongoose = require("mongoose");
var mongo = require("../db/mongo");

                                    // users e kako da se vika modelot 
var Users = mongoose.model(         //model sto ke se koristi ponatamu samo so copy past
    'users',                        //kreiras model, pa ja definiras semata na samiot model
    new mongoose.Schema({
    "firstname" : String, 
    "lastname" : String, 
    "email" : String, 
    "location" : {
        "country" : String,
        "city" :  String, 
        "minicipality" : String,
    }
})
);

var getAllUsers = (cb) => {
    Users.find({}, (err, data) => {
    if(err){
        return cb(err, null);
    }
    else {
        return cb(null, data);
    }
});
};

var getUsersByName = (name, cb) => {
    Users.find({firstname: name}, (err, data) => {
    if(err){
        return cb(err, null);
    }
    else {
        return cb(null, data);
    }
});
};

module.exports = {
    getAllUsers
}