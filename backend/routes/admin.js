const express = require('express')
const { Dashboard , AddCar, GetAllCars, DeleteCar, GetAllUsers ,UpdateUser,DeleteUser } = require('../controllers/admin')
const router = express.Router()



router
    .route('/admin')
    .get(Dashboard)
router
    .route('/addcar')
    .post(AddCar)
router
    .route('/cars')
    .get(GetAllCars) 
router
    .route('/deletecar/:id')
    .get(DeleteCar)
    
router
    .route('/users')
    .get(GetAllUsers)
router.put('/users/:id', UpdateUser)
router.delete('/users/:id', DeleteUser)

module.exports = router