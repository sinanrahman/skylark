const mongoose = require('mongoose');

const pageReviewSchema = new mongoose.Schema({
    id:String,
    userid:String,
    rating:Number,
    head:String,
    text:String,
});

module.exports =  mongoose.model('pageReview', pageReviewSchema);