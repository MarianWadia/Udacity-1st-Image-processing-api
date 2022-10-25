"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const indexSpec_1 = __importDefault(require("./indexSpec"));
const sharp_1 = __importDefault(require("sharp"));
const Baseurl = "/routes/apis";
let width;
let height;
let file;
it("enters data for resizing", () =>
  __awaiter(void 0, void 0, void 0, function* () {
    const response = yield indexSpec_1.default.get(
      `${Baseurl}/resizing?toprocess=${file}&height=${height}&width=${width}`
    );
    const parsedHeight = parseInt(height);
    const parsedWidth = parseInt(width);
    if (parsedHeight < 0 || parsedWidth < 0) {
      expect(response.status).toBe(400);
    } else if (file && parsedHeight && parsedWidth) {
      expect(response.status).toBe(202);
      expect((0, sharp_1.default)(file).resize(parsedHeight, parsedWidth))
        .toBeTruthy;
    }
  }));
