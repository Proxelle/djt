const express = require('express')
const router = express.Router()
const registrationUser = require('../controllers/registrationUserController')

router.use('/registration', registrationUser)

module.exports = router