const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    issuetype:{
        type:String,
        required:true
    },
    issuedescription:{
        type:String,
        required:true
    },
    issuedate:{
        type:Date,
        required:true
    },
    isresolved:Boolean,
});

module.exports =  mongoose.model('Issue', issueSchema);