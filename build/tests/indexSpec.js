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
const index_1 = __importDefault(require("../index"));
const supertest_1 = __importDefault(require("supertest"));
const originalsArray_1 = __importDefault(require("../utilities/originalsArray"));
const sharp_1 = __importDefault(require("sharp"));
// import routes from "../routes/"
const request = (0, supertest_1.default)(index_1.default);
const Baseurl = '/routes/apis';
let width;
let height;
let file;
describe("image suite", () => {
    it("test main route", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get(Baseurl);
        expect(response.status).toBe(301);
    }));
    it("get original image", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get(`${Baseurl}/image?file=${file}`);
        if (file && originalsArray_1.default.includes(file)) {
            expect(response.status).toBe(200);
        }
        else if (file === undefined || !originalsArray_1.default.includes(file)) {
            expect(response.status).toBe(404);
        }
    }));
    it("first data", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get(`${Baseurl}/resizing?toprocess=${file}&height=${height}&width=${width}`);
        const parsedHeight = parseInt(height);
        const parsedWidth = parseInt(width);
        if (file && parsedHeight && parsedWidth) {
            // expect(response.status).toBe(202);
            expect((0, sharp_1.default)(file).resize(parsedHeight, parsedWidth)).toBeTruthy;
        }
        else if (parsedHeight < 0 || parsedWidth < 0) {
            expect(response.status).not.toBe(400);
        }
    }));
});
