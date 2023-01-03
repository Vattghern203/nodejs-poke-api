const { Router } = require("express");
const UserController = require('../controllers/userController')

const route = Router()

route.get('/user',UserController.ConsultUser)

module.exports = route