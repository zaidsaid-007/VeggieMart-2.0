import orderModel from "../Models/orderModel.js";
import userModel from "../Models/userModel.js";


//placing user order for frontend

const placeOrder = async (req,res) => {
    try {
        const newOrder = new orderModel({
            userId:req.body.userId,
            items:req.body.items,
            amount:req.body.amount,
            address:req.body.address
        })
        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}});


        const line_items = req.body.items.map((item)=>({
            price_data:{
                currency:"KES",
                product_data:{
                    name:item.name
                    
                },
            },
            quantity:item.quantity
        }))

        line_items.push({
            price_data:{
                currency:"KES",
                product_data:{
                    name:"Delivery Fee"
                },
                unit_amount:50
            },
            quantity:1
        })

        // Initialize Mpesa Daraja API request
        const mpesaResponse = await axios.post('https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest', {
            BusinessShortCode: 'YOUR_BUSINESS_SHORT_CODE',
            Password: 'YOUR_PASSWORD',
            Timestamp: 'YOUR_TIMESTAMP',
            TransactionType: 'CustomerPayBillOnline',
            Amount: req.body.amount,
            PartyA: req.body.phoneNumber, // Customer's phone number
            PartyB: 'YOUR_BUSINESS_SHORT_CODE',
            PhoneNumber: req.body.phoneNumber,
            CallBackURL: 'YOUR_CALLBACK_URL',
            AccountReference: 'ORDER_REFERENCE',
            TransactionDesc: 'Payment for order'
        }, {
            headers: {
            Authorization: `Bearer ${YOUR_ACCESS_TOKEN}`
            }
        });

        // Handle the response from Mpesa
        if (mpesaResponse.data.ResponseCode === '0') {
            res.status(200).json({ message: 'Order placed successfully', mpesaResponse: mpesaResponse.data });
        } else {
            res.status(400).json({ message: 'Failed to place order', mpesaResponse: mpesaResponse.data });
        }

    } catch (error) {
        
    }
}
export {placeOrder}