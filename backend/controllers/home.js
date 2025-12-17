const User = require('../models/User')
const Booking = require('../models/Booking');
const Car = require('../models/Car')

exports.GetHomePage = async(req,res) =>{
    try{
        let user = await User.findOne({id:req.user.id})
        if(!user || !req.user){
            return res.status(401).json({message:"User not found"})
        }
        return res.status(200).json({
            message:'Home Page',
            user:req.user
        })
    }catch(e){
        console.log('error while rendering homepage')
        console.log(e)
        return res.status(400).json({
            message:'Authentication Failed'
        })
    }
}
exports.GetCarsPage = (req,res) =>{
    try{
        return res.render('home/cars')
    }catch(e){
        console.log('error while rendering cars page')
        console.log(e)
        return res.send("<h1>something is wrong</h1>")
    }
}
exports.GetContactPage = (req,res) =>{
    try{
        return res.render('home/contact')
    }catch(e){
        console.log('error while rendering contact page')
        console.log(e)
        return res.send("<h1>something is wrong</h1>")
    }
}
exports.GetAboutPage = (req,res) =>{
    try{
        return res.render('home/about')
    }catch(e){
        console.log('error while rendering about page')
        console.log(e)
        return res.send("<h1>something is wrong</h1>")
    }
}


exports.GetBookingsPage = async (req, res) => {
  try {
    const bookings = await Booking.find();

    return res.status(200).json({
      message: 'Bookings fetched',
      bookings
    });
  } catch (e) {
    console.error('GetBookingsPage error:', e);
    return res.status(500).json({
      message: 'Failed to fetch bookings'
    });
  }
};

exports.CreateBooking = async (req, res) => {
  try {
    console.log('Booking request body:', req.body);

    const {
      userId,
      carId,
      pickupDate,
      returnDate,
      pickupLocation,
      dropLocation,
      driverOption,
      paymentMethod,
      totalDays,
      totalAmount,
      pricePerDay
    } = req.body;

    if (
      !userId ||
      !carId ||
      !pickupDate ||
      !returnDate ||
      !pickupLocation ||
      !dropLocation ||
      !driverOption ||
      !paymentMethod ||
      !totalDays ||
      !totalAmount ||
      !pricePerDay
    ) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const booking = await Booking.create({
      bookingId: Date.now().toString(), 
      userId,
      carId,
      pickupDate,
      returnDate,
      pickupLocation,
      dropLocation,
      driverOption,
      paymentMethod,
      totalDays,
      totalAmount,
      pricePerDay
    });

    return res.status(201).json({
      message: 'Booking created successfully',
      booking
    });

  } catch (error) {
    console.error('CreateBooking error:', error);
    return res.status(500).json({
      message: 'Failed to create booking'
    });
  }
};
exports.GetCar = async (req,res) =>{
    try{
       const cars = await Car.findOne({_id:req.params.id});
       
           res.status(200).json({
             success: true,
             count: cars.length,
             data: cars
           })
    }catch(e){
        console.log('error while rendering getcar')
        console.log(e)
    }
}
