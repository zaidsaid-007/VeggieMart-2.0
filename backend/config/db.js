import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://zaidsaid007:ZUHSI612XFJASQCo@cluster0.gfz4s.mongodb.net/veggiemart').then(()=>console.log("DB Connected"))
}


