// models/Testimonial.js
const mongoose = require('mongoose')

const testimonialSchema = new mongoose.Schema({
  name: String,
  message: String,
  rating: Number,
  avatar: String, // image url
  createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Testimonial', testimonialSchema)
