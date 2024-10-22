import userModel from '../Models/userModel.js';

// Add Items to user Cart
const addToCart = async (req, res) => {
    console.log("Request Body:", req.body); // Log incoming request body
    try {
        const userId = req.body.user; // Use the user from the token
        const itemId = req.body.itemId; // Ensure this is included



        let userData = await userModel.findById(req.body.userId);
        if (!userData) {
            return res.status(404).json({ message: "User not found" });
        }

        // Initialize cartData if it doesn't exist
        let cartData = userData.cartData || {};

        // Add or update the item in cartData
        if (!cartData[req.body.itemId]) {
            cartData[req.body.itemId] = 1; // Add item if not present
        } else {
            cartData[req.body.itemId] += 1; // Increment item count
        }

        // Update the user model with the modified cartData
        await userModel.findByIdAndUpdate(req.body.userId, { cartData });

        // Log the updated cartData for debugging
        console.log("Updated Cart Data:", cartData);

        res.status(200).json({ message: "Item added to cart" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Error adding item to cart" });
    }
};


// Remove Items from user Cart
const removeFromCart = async (req, res) => {
    console.log("Request Body:", req.body);
    try {
        const userId = req.body.userId;
        const itemId = req.body.itemId;

        let userData = await userModel.findById(userId);
        if (!userData) {
            return res.status(404).json({ message: "User not found" });
        }

        let cartData = userData.cartData || {};

        if (!cartData[itemId] || cartData[itemId] <= 0) {
            return res.status(404).json({ message: "Item not found in cart" });
        }

        cartData[itemId] -= 1;

        if (cartData[itemId] === 0) {
            delete cartData[itemId];
        }

        await userModel.findByIdAndUpdate(userId, { cartData });

        console.log("Updated Cart Data:", cartData);

        res.status(200).json({ message: "Item removed from cart" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Error removing item from cart" });
    }
};


// Get Items from user Cart
const getCartItems = async (req, res) => {
    try{
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        res.status(200).json(cartData);
    }
    catch(error){
        console.log(error)
        res.json({success:false,message:error})
    }
 }

export { addToCart, removeFromCart, getCartItems }
