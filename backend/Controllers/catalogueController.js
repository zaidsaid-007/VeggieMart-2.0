import Catalogue from "../Models/CatalogueModel.js";
import fs from 'fs'

//adding catalogue items

const addCatalogue = async (req,res) => {
    let image_filename =`${req.file.filename}`
    const catalogue = new Catalogue({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        image: image_filename,
        category: req.body.category
    })
    try {
        await catalogue.save()
        res.status(201).json({success:true,message: "product saved"})
    } catch (error) {
        res.status(400).json({message: "product not saved"})
    }
}

export {addCatalogue}