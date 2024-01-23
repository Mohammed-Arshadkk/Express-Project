const express = require('express')
const router = express.Router()

const{getLogincontroller}=require('../controllers/maincontrollers')
const{getSignupController}=require('../controllers/maincontrollers')
const{getLogoutController}=require('../controllers/maincontrollers')
const{getIndexcontroller}=require('../controllers/maincontrollers')
const{postSignupController}=require('../controllers/maincontrollers')
const{postLoginController}=require('../controllers/maincontrollers')


// import login
router.get("/login",getLogincontroller)
// import signup
router.get("/signup",getSignupController)

router.get("/logout",getLogoutController)
// import index
router.get('/index',getIndexcontroller)

// check the signup page
router.post('/signup', postSignupController)

// take login request and send the index as response
router.post('/login', postLoginController)

module.exports = router