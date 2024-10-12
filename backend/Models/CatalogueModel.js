import mongoose from "mongoose";

const  catalogueSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
})

const catalogueModel = mongoose.models.catalogue || mongoose.model('catalogue', catalogueSchema)

export default catalogueModel;
