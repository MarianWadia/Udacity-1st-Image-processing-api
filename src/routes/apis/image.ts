import express from "express";
import path from "path";
import originals from "../../utilities/originalsArray";

const image = express.Router();
image.get('/', (req, res)=>{
    const fileName :string|undefined = req.query.file as string;
    const imagePath = path.resolve('.\\') + `\\images\\originals\\${fileName}`;
    const originalImage :boolean = originals.includes(fileName as string);

    if(fileName === undefined){
        res
        .status(400)
        .send(`Bad request please enter your file name our avaliable images: 
        [${originals}]`);
    }
    else if(!originalImage){
        res
        .status(404)
        .send(`This file ${fileName} is not found please enter an image from our avaliable images: 
        [${originals}]`);
    }
    else if(originalImage){
        res
        .status(200)
        .sendFile(imagePath);
    }

});
export default image;