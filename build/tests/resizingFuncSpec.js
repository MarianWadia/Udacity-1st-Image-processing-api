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
const resizingFunc_1 = __importDefault(require("../utilities/resizingFunc"));
const originalsArray_1 = __importDefault(require("../utilities/originalsArray"));
const path_1 = __importDefault(require("path"));
const rootPath = path_1.default.resolve(".//");
const erroeMessage = `Bad request please enter your file name correctly, and positive values of width and height our avaliable images are: 
        [${originalsArray_1.default}]`;
describe("the resizing functions of images", () => {
    it("tests when all data is right", () => __awaiter(void 0, void 0, void 0, function* () {
        const imageName = "fjord.jpg";
        const height = 578;
        const width = 984;
        const outFilePath = path_1.default.join(rootPath, "images", "thumbnails", `${height}x${width}${imageName}`);
        const response = yield (0, resizingFunc_1.default)(imageName, width, height);
        expect(response).toEqual(outFilePath);
    }));
    it("tests when all data is right", () => __awaiter(void 0, void 0, void 0, function* () {
        const imageName = "hello.jpg";
        const height = 0;
        const width = 0;
        const response = yield (0, resizingFunc_1.default)(imageName, width, height);
        expect(response).toEqual(erroeMessage);
    }));
    it("tests when all data is right", () => __awaiter(void 0, void 0, void 0, function* () {
        const imageName = "fjord.jpg";
        const height = 0;
        const width = 0;
        const ImagePath = path_1.default.join(rootPath, "images", "originals", `${imageName}`);
        const response = yield (0, resizingFunc_1.default)(imageName, width, height);
        expect(response).toEqual(ImagePath);
    }));
    it("tests when all data is right", () => __awaiter(void 0, void 0, void 0, function* () {
        const imageName = "fjord.jpg";
        const height = -895;
        const width = -985;
        const response = yield (0, resizingFunc_1.default)(imageName, width, height);
        expect(response).toEqual(erroeMessage);
    }));
});
