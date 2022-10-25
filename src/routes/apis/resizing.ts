import express from "express";
import { Request, Response} from "express";
import sharp from "sharp";
import path from "path";
import originals from "../../utilities/originalsArray";

const resizing = express.Router();

const pathRoot :string =  path.resolve('.\\');
resizing.get('/', (req :Request, res :Response)=>{
    const fileName :string|undefined = req.query.toprocess as string;
    const enteredWidth :string|undefined =  req.query.width as string;
    const enteredHeight :string|undefined = req.query.height as string;
    const height :number = parseInt(enteredHeight);
    const width :number = parseInt(enteredWidth);
    const ImagePath :string = pathRoot + `\\images\\originals\\${fileName}`;
    const outFilePath: string = pathRoot + `\\images\\thumbnails\\${height}x${width}${fileName}`;
 
    if(`${ImagePath}${height}x${width}${fileName}` === outFilePath || width == 0 || height == 0){
        res
        .send("No need to resize")
        .sendFile(outFilePath);
    }
    else if(!fileName || !enteredWidth || !enteredHeight || width<0 || height<0){
        res 
        .status(400)
        .send(`Bad request please enter your file name correctly, and positive values of width and height our avaliable images are: 
        [${originals}]`);
    }
    else{
        sharp(ImagePath).resize(height, width).toFile(outFilePath);
        res
        .status(200)
        .sendFile(outFilePath);
    }
});
export default resizing;