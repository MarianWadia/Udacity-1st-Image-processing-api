"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const sharp_1 = __importDefault(require("sharp"));
const originalsArray_1 = __importDefault(require("./originalsArray"));
const process = (inputFile, width, height, outFile) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, sharp_1.default)(inputFile).resize(height, width).toFile(outFile);
});
const rootPath = path_1.default.resolve(".\\");
const modifing = (imageName, width, height) => __awaiter(void 0, void 0, void 0, function* () {
    const ImagePath = path_1.default.join(rootPath, 'images', 'originals', `${imageName}`);
    const outFilePath = path_1.default.join(rootPath, 'images', 'thumbnails', `${height}x${width}${imageName}`);
    const originalImage = originalsArray_1.default.includes(imageName);
    const validValues = width > 0 && height > 0;
    const notValidValues = isNaN(width) || isNaN(height);
    if ((originalImage && width === 0 && height === 0)) {
        // send original image without resizing
        return ImagePath;
    }
    if (validValues && originalImage) {
        yield process(ImagePath, height, width, outFilePath);
        return outFilePath;
    }
    else if (!originalImage || notValidValues || !validValues) {
        const message = `Bad request please enter your file name correctly, and positive values of width and height our avaliable images are: 
        [${originalsArray_1.default}]`;
        return message;
    }
    if (width === 0 && height > 0 && originalImage) {
        yield process(ImagePath, height, 0, outFilePath);
        return outFilePath;
    }
    else if (height === 0 && width > 0) {
        yield process(ImagePath, 0, width, outFilePath);
        return outFilePath;
    }
});
exports.default = modifing;
