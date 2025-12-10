const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    id:String,
    userid:String,
    carid:String,
    optionsSelected:[String],
    amountpaid:Number,
    pickupdate:Date,
    dropdate:Date,
    location:String,
});

module.exports =  mongoose.model('Booking', bookingSchema);