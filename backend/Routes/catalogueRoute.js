import express  from 'express';
import { addCatalogue, listCatalogue, removeCatalogue } from '../Controllers/catalogueController.js';
import multer from 'multer';

const catalogueRouter = express.Router();

//Image storage engine


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Uploads/')
    },
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

catalogueRouter.post("/add",upload.single("image"),addCatalogue)
catalogueRouter.get("/list",listCatalogue)
catalogueRouter.post("/remove",removeCatalogue)

export default catalogueRouter;