import express from 'express';
import { addToCart, getCartItems,removeFromCart } from '../Controllers/cartController.js';
import auth from '../Middleware/auth.js';

//routes

const cartRouter = express.Router();

cartRouter.post("/add",auth,addToCart)
cartRouter.post("/remove",auth,removeFromCart)
cartRouter.get("/get",auth,getCartItems)

export default cartRouter;