const itemRoute = require('express').Router()
const ItemController = require('../controllers/ItemController')
const { authentication } = require('../middlewares/auth')

itemRoute.get('/', authentication, ItemController.getItems)
itemRoute.post('/', ItemController.createItem)


module.exports = itemRoute