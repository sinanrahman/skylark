const express = require('express')
const { Dashboard } = require('../controllers/admin')
const router = express.Router()


router
    .route('/admin')
    .get(Dashboard)

module.exports = router