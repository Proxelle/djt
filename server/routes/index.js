const express = require('express')
const router = express.Router()
const registrationUser = require('../controllers/registrationUserController')
// const adminPassword = require('../controllers/adminPasswordController')

router.use('/registration', registrationUser)
// router.use('/admin', adminPassword)

module.exports = router