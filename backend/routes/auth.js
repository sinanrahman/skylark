const express = require('express')
const router = express.Router()

const {Login, Logout, GetRegisterPage, Register, GetLoginPage } = require('../controllers/auth')


router
    .route('/login')
    .get(GetLoginPage)
    .post(Login)
router
    .route('/register')
    .get(GetRegisterPage)
    .post(Register)

router
    .route('/logout')
    .get(Logout)

module.exports = router