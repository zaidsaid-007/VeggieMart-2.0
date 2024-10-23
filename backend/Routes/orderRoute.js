import express from 'express';
import auth from '../Middleware/auth.js'
import {placeOrder} from '../Controllers/orderController.js'


const orderRouter = express.Router();

orderRouter.post('/place', auth, placeOrder);

export default orderRouter;