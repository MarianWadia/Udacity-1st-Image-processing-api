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
const indexSpec_1 = __importDefault(require("../indexSpec"));
const originalsArray_1 = __importDefault(require("../../utilities/originalsArray"));
const Baseurl = "/routes/apis";
const errorMessage = `Bad request please enter your file name correctly, and positive values of width and height our avaliable images are: 
        [${originalsArray_1.default}]`;
let width;
let file;
let height;
it("enters data for resizing", () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield indexSpec_1.default.get(`${Baseurl}/resizing?toprocess=${file}&height=${height}&width=${width}`);
    const widthNum = parseInt(width);
    const heightNum = parseInt(height);
    if (file === "hello.jpg" && heightNum === 0 && widthNum === 0) {
        expect(response.text).toEqual(errorMessage);
    }
    else if (file === "fjord.jpg" && heightNum === 0 && widthNum === 0) {
        expect(response.status).toEqual(200);
    }
    else if (file === "fjord.jpg" && heightNum === 582 && widthNum === 854) {
        expect(response.status).toEqual(200);
    }
    else if (file === "hello.jpg" && heightNum === -582 && widthNum === -854) {
        expect(response.text).toEqual(errorMessage);
    }
    else {
        expect(response.text).toEqual(errorMessage);
    }
}));
