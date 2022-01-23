const userRoute = require('express').Router()
const UserController = require('../controllers/UserController')

userRoute.get('/all', UserController.getUserAll)
userRoute.post('/auth/login', UserController.login)
userRoute.post('/auth/register', UserController.register)

module.exports = userRoute