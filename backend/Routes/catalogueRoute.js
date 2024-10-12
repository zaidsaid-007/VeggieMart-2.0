import express  from 'express';
import { addCatalogue } from '../Controllers/catalogueController.js';
import multer from 'multer';

const catalogueRouter = express.Router();

//Image storage engine


const storage = multer.diskStorage({
    filename:(req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

catalogueRouter.post("/add",upload.single("image"),addCatalogue)


export default catalogueRouter;