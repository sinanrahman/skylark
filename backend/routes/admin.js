const express = require('express')
const { Dashboard, AddCar, DeleteCar, GetAllUsers, UpdateCar, UpdateUser, DeleteUser } = require('../controllers/admin')
const router = express.Router()


router
    .route('/admin')
    .get(Dashboard)
router
    .route('/addcar')
    .post(AddCar)
// router
//     .route('/cars')
//     .get(GetAllCars) // change this route and controller form admin to home
router
    .route('/deletecar/:id')
    .get(DeleteCar)

router
    .route('/users')
    .get(GetAllUsers)

router
    .route('/cars/:id')
    .put(UpdateCar)

router
    .route('/admin/users/:id')
    .put(UpdateUser)
router
    .route('/admin/users/:id')
    .delete(DeleteUser)




module.exports = router