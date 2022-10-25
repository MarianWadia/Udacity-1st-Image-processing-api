"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sharp_1 = __importDefault(require("sharp"));
const path_1 = __importDefault(require("path"));
const originalsArray_1 = __importDefault(require("../../utilities/originalsArray"));
const resizing = express_1.default.Router();
const pathRoot = path_1.default.resolve('.\\');
resizing.get('/', (req, res) => {
    const fileName = req.query.toprocess;
    const enteredWidth = req.query.width;
    const enteredHeight = req.query.height;
    const height = parseInt(enteredHeight);
    const width = parseInt(enteredWidth);
    const ImagePath = pathRoot + `\\images\\originals\\${fileName}`;
    const outFilePath = pathRoot + `\\images\\thumbnails\\${height}x${width}${fileName}`;
    if (`${ImagePath}${height}x${width}${fileName}` === outFilePath || width == 0 || height == 0) {
        res
            .send("No need to resize")
            .sendFile(outFilePath);
    }
    else if (!fileName || !enteredWidth || !enteredHeight || width < 0 || height < 0) {
        res
            .status(400)
            .send(`Bad request please enter your file name correctly, and positive values of width and height our avaliable images are: 
        [${originalsArray_1.default}]`);
    }
    else {
        (0, sharp_1.default)(ImagePath).resize(height, width).toFile(outFilePath);
        res
            .status(200)
            .sendFile(outFilePath);
    }
});
exports.default = resizing;
