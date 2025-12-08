const express = require('express')
const { GetHomePage, GetCarsPage, GetContactPage, GetAboutPage } = require('../controllers/home')
const router = express.Router()



router
    .route('/')
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

module.exports = router