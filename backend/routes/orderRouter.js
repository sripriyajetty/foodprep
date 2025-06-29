const express=require('express')
const orderRouter =express.Router()
const {placeOrder} = require('../controllers/orderController')
const authMiddleware = require('../middlewares/auth')

orderRouter.post('/place',authMiddleware,placeOrder);

module.exports = orderRouter    