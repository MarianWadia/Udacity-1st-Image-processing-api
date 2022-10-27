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
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const originalsArray_1 = __importDefault(require("../../utilities/originalsArray"));
const resizingFunc_1 = __importDefault(require("../../utilities/resizingFunc"));
const resizing = express_1.default.Router();
const rootPath = path_1.default.resolve('.//');
resizing.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const fileName = req.query.toprocess;
    const enteredWidth = req.query.width;
    const enteredHeight = req.query.height;
    const height = parseInt(enteredHeight);
    const width = parseInt(enteredWidth);
    const outFilePath = path_1.default.join(rootPath, 'images', 'thumbnails', `${height}x${width}${fileName}`);
    const originalImage = originalsArray_1.default.includes(fileName);
    const validValues = width > 0 && height > 0;
    const notValidValues = isNaN(width) || isNaN(height);
    const response = (0, resizingFunc_1.default)(fileName, width, height);
    if ((fs_1.default.existsSync(outFilePath))) {
        res.status(200).sendFile(yield response);
    }
    if (originalImage && validValues && !notValidValues) {
        res.status(200).sendFile(yield response);
    }
    else if (!originalImage || notValidValues || !validValues) {
        res.status(200).send(yield response);
    }
    else {
        res.status(400).send(yield response);
    }
    if (width === 0 && height > 0 && originalImage) {
        res.status(200).sendFile(yield response);
    }
    else if (height === 0 && width > 0 && originalImage) {
        res.sendFile(yield response);
    }
    else {
        res.status(400).send(yield response);
    }
}));
exports.default = resizing;
