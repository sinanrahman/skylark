const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  bookingId: {
    type: String,
    required: true,
    unique: true
  },

  userId: {
    type: String,
    required: true
  },

  carId: {
    type: String,
    required: true
  },

  pickupDate: {
    type: Date,
    required: true
  },

  returnDate: {
    type: Date,
    required: true
  },

  pickupLocation: {
    type: String,
    required: true
  },

  dropLocation: {
    type: String,
    required: true
  },

  driverOption: {
    type: String,
    enum: ['No Driver', 'With Driver'],
    required: true
  },

  paymentMethod: {
    type: String,
    enum: ['Cash', 'UPI', 'Card'],
    required: true
  },

  totalDays: {
    type: Number,
    required: true
  },

  totalAmount: {
    type: Number,
    required: true
  },

  pricePerDay: {
    type: Number,
    required: true
  }

}, {
  timestamps: true
});

module.exports = mongoose.model('Booking', bookingSchema);


//  carId: '1',
//   pickupDate: '2025-12-07',  
//   returnDate: '2025-12-29',  
//   pickupLocation: '3re',     
//   dropLocation: 'ytr4e3',    
//   driverOption: 'No Driver', 
//   paymentMethod: 'Cash',     
//   totalDays: 22,
//   totalAmount: 132000,       
//   pricePerDay: 6000