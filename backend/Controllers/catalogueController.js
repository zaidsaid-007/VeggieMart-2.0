import catalogueModel from "../Models/CatalogueModel.js";
import fs from 'fs';

// Adding catalogue items
const addCatalogue = async (req, res) => {
    const image_filename = req.file.filename; // Get the filename generated by Multer
    const catalogue = new catalogueModel({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        image: image_filename, // Store the filename in the database
        category: req.body.category
    });

    try {
        await catalogue.save(); // Save the catalogue item to the database
        res.status(201).json({ success: true, message: "product saved" });
    } catch (error) {
        console.error('Error saving product:', error);
        res.status(400).json({ message: "product not saved" });
    }
}

// Getting all catalogue items
const listCatalogue = async (req, res) => {
    try {
        const catalogue = await catalogueModel.find({});
        res.status(200).json(catalogue);
    } catch (error) {
        console.error('Error getting catalogue items:', error);
        res.status(500).json({ message: "error getting catalogue items" });
    }
}

// Remove catalogue item
const removeCatalogue = async (req, res) => {
    try {
        const catalogue = await catalogueModel.findByIdAndDelete(req.body.id);
        

        // Check if the catalogue item was found
        if (!catalogue) {
            return res.status(404).json({ message: "catalogue item not found" });
        }

        // Remove the associated image file from the server
        fs.unlink(`Uploads/${catalogue.image}`, (err) => {
            if (err) {
                console.error('Error deleting image:', err);
            }
        });

        res.status(200).json({ message: "catalogue item deleted" });
    } catch (error) {
        console.error('Error deleting catalogue item:', error);
        res.status(500).json({ message: "error deleting catalogue item" });
    }
}

// Export the functions
export { addCatalogue, listCatalogue, removeCatalogue };
