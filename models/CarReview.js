const mongoose = require('mongoose');

const carReviewSchema = new mongoose.Schema({
    id:String,
    userid:String,
    rating:Number,
    head:String,
    text:String,
    carid:String,
});

module.exports =  mongoose.model('carReview', carReviewSchema);