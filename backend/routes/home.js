const express = require('express')
const { GetHomePage, GetCarsPage, GetContactPage, GetAboutPage,GetBookingsPage ,CreateBooking} = require('../controllers/home')
const router = express.Router()


router
    .route('/profile')
    .get(GetHomePage)
router
    .route('/cars')
    .get(GetCarsPage)
router
    .route('/contact')
    .get(GetContactPage)
router
    .route('/about')
    .get(GetAboutPage)

router
   .route('/bookings')
   .get(GetBookingsPage)
   .post(CreateBooking)

module.exports = router