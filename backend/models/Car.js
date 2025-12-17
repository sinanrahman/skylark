const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    id:String,
    name:String,
    type:String,
    transmission:String,
    fuel:String,
    priceforday:Number,
    images: [String],
    availability:boolean,
    seat:number
});

module.exports =  mongoose.model('Car', carSchema);