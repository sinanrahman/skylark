const express = require('express')
const { Dashboard , AddCar, GetAllCars, DeleteCar } = require('../controllers/admin')
const router = express.Router()


router
    .route('/admin')
    .get(Dashboard)
router
    .route('/addcar')
    .post(AddCar)
router
    .route('/cars')
    .get(GetAllCars) // change this route and controller form admin to home
router
    .route('/deletecar/:id')
    .get(DeleteCar)
    
module.exports = router