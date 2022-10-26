"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const originalsArray_1 = __importDefault(require("../../utilities/originalsArray"));
const image = express_1.default.Router();
image.get("/", (req, res) => {
    const fileName = req.query.file;
    const currentPath = path_1.default.resolve(".\\");
    const imagePath = path_1.default.join(currentPath, 'images', 'originals', `${fileName}`);
    const originalImage = originalsArray_1.default.includes(fileName);
    if (fileName === undefined) {
        res.status(400)
            .send(`Bad request please enter your file name our avaliable images: 
        [${originalsArray_1.default}]`);
    }
    else if (!originalImage) {
        res.status(404)
            .send(`This file ${fileName} is not found please enter an image from our avaliable images: 
        [${originalsArray_1.default}]`);
    }
    else if (originalImage) {
        res.status(200).sendFile(imagePath);
    }
});
exports.default = image;
