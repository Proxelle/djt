var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    Patronymic: {
        type: String
    },
    age:{
        type: Date
    },
    country:{
        type: String
    },
    city:{
        type: String
    },
    email:{
        type: String
    },
    password:{
        type: String
    },

});

module.exports = mongoose.model('User', UserSchema);