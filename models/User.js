const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id:String,
    username:String,
    name:String,
    phone:String,
    mail:String,
    password:String,
    hasbooking:Boolean,
    dp:String,
});

module.exports =  mongoose.model('User', userSchema);