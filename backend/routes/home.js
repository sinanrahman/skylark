const express = require('express')
const { GetHomePage, GetCarsPage, GetContactPage, GetAboutPage, GetCar } = require('../controllers/home')
const { route } = require('./admin')
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

module.exports = router