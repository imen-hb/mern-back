// require express
const express = require('express')
const { test, register, login, getOneUser, getUsers } = require('../controllers/user')
const isAuth = require('../middlewares/isAuth')

const {registerValidation, validator}= require('../middlewares/validator')

// require Router
const router = express.Router()

// test Route
router.get('/test', test)

// register Route
router.post('/register',registerValidation(), validator,  register)

// login Route
router.post('/login', login) 

// current Route
router.get('/current', isAuth, (req, res) => {
    res.send(req.user)
})

// get users
router.get('/getUsers', getUsers)

// get user by id
router.get('/getOneUser', getOneUser)

// export router
module.exports = router