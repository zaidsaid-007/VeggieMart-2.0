import express from "express";
import cors from "cors";
import {connectDB} from './config/db.js'
import catalogueRouter from "./Routes/catalogueRoute.js";
import userRouter from "./Routes/userRoute.js";
import 'dotenv/config'

//app config
const app = express();
const port = process.env.PORT || 4000;

//middleware
app.use(express.json())
app.use(cors())

//db Connection
connectDB();


//api endpoints

app.use("/api/catalogue", catalogueRouter)
app.use("/images",express.static("Uploads"))
app.use('/api/user',userRouter)

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server running on http://localhost:${port}`)
})
