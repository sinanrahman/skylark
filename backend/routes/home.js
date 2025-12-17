const express = require('express')
const { GetHomePage, GetCarsPage, GetContactPage, GetAboutPage, GetCar, GetBookingsPage, CreateBooking, GetBookingsDetails, UpdateUserProfile } = require('../controllers/home')
const router = express.Router()


router
    .route('/profile')
    .get(GetHomePage)
// router
//     .route('/cars')
//     .get(GetCarsPage)
router
    .route('/contact')
    .get(GetContactPage)
router
    .route('/about')
    .get(GetAboutPage)
router
    .route('/getcar/:id')
    .get(GetCar)

router
   .route('/bookings')
   .get(GetBookingsPage)
   .post(CreateBooking)
router
   .route('/bookings/:userId')
   .get(GetBookingsDetails) 
router.put("/users/:id", UpdateUserProfile)   

module.exports = router