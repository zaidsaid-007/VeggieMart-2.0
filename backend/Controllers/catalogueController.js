import catalogueModel from "../Models/CatalogueModel.js";
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

//getting all catalogue items

const listCatalogue = async (req,res) => {
    try {
        const catalogue = await Catalogue.find({})
        res.status(200).json(catalogue)
    } catch (error) {
        res.status(500).json({message: "error getting catalogue items"})
    }
}


//remove catalogue item

const removeCatalogue = async (req,res) => {
    try {
        const catalogue = await catalogueModel.findByIdAndDelete(req.body.id);

        if(!Catalogue){
            return res.status(404).json({message: "catalogue item not found"})
        }
        fs.unlink(`Uploads/${Catalogue.image}`,()=>{})
        await catalogueModel.findByIdAndDelete(req.body.id);
        res.status(200).json({message: "catalogue item deleted"})
    } catch (error) {
        res.status(500).json({message: "error deleting catalogue item"})
    }
}






export {addCatalogue,listCatalogue,removeCatalogue}