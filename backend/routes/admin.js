const express = require('express')
const { Dashboard ,GetAllUsers} = require('../controllers/admin')
const router = express.Router()


router
    .route('/admin')
    .get(Dashboard)

    
router
    .route('/users')
    .get(GetAllUsers)

module.exports = router