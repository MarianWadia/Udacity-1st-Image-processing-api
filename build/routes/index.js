"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const image_1 = __importDefault(require("./apis/image"));
const resizing_1 = __importDefault(require("./apis/resizing"));
// import {promises as fsPromises} from "fs";
const routes = express_1.default.Router();
routes.get("/", (_req, res) => {
  res.send("The main api");
});
routes.use("/image", image_1.default);
routes.use("/resizing", resizing_1.default);
exports.default = routes;
