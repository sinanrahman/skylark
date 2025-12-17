const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    id: String,
    name: String,
    model: String,
    category:String,
    transmission: String,
    fuel: String,
    price: Number,
    safetyRating:String,
    description:String,
    features:[String],
    images: [
        {
            url: {
                type: String,
                required: true
            },
            public_id: {
                type: String,
                required: true
            }
        }
    ],    
    status:String,
    seats: Number

},
{
    timestamps: true   // ✅ ADD THIS
  }
);

module.exports = mongoose.model('Car', carSchema);


// {
//   name: 'wsed',
//   model: '2222',
//   seats: '5',
//   category: 'SUV',
//   fuel: 'Petrol',
//   status: 'Available',
//   price: '888',
//   safetyRating: '★★★★★ (5)',
//   transmission: 'manual',
//   description: 'dfghj',
//   'features[]': [ 'AC', 'Driver' ],
//   images: [
//     {
//       url: 'https://res.cloudinary.com/ds4orgk3j/image/upload/v1765895223/skylark/cars/w3hpqqim1fr35rmbfevs.jpg',
//       public_id: 'skylark/cars/w3hpqqim1fr35rmbfevs'
//     },
//     {
//       url: 'https://res.cloudinary.com/ds4orgk3j/image/upload/v1765895224/skylark/cars/huk7dwbzgtwo8cutnugd.jpg',
//       public_id: 'skylark/cars/huk7dwbzgtwo8cutnugd'
//     }
//   ]
// }