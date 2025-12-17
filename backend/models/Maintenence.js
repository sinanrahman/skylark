const mongoose = require('mongoose');

const maintenenceSchema = new mongoose.Schema({
    id:String,
    carid:String,
    Maintenencetype:String,
    Maintenencedescription:String,
    price:Number,
    
},
{
    timestamps: true   // ✅ THIS IS REQUIRED
}
);

module.exports =  mongoose.model('Maintenence', maintenenceSchema);