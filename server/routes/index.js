const express = require('express')
const router = express.Router()
const registrationUser = require('../controllers/registrationUserController')
// const adminPassword = require('../controllers/adminPasswordController')
const linksPanel = require('../controllers/linksPanelController')
const changeLinksPanel = require('../controllers/changeLinksPanelController')

router.use('/registration', registrationUser)
// router.use('/admin', adminPassword)
// router.use('/links-panel', linksPanel)

router.use('/links-panel', () => {
    console.log('links-panel')
})
router.use('/change-links-panel', changeLinksPanel)

module.exports = router