var Mongoose = require('mongoose');
var db = require('../config/database');
var connection = db.primary.connection;


var UserSchema = Mongoose.Schema({
    name      : String,
    email     : { type: String, unique: true },
    age       : Number,
    birthdate : Date,
    createdOn : { type: Date, default: Date.now }
});

var User = connection.model('User',UserSchema);

module.exports = User;
