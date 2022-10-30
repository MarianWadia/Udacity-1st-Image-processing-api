import express from "express";
import { Request, Response } from "express";
import path from "path";
import fs from "fs";
import originals from "../../utilities/originalsArray";
import modifing from "../../utilities/resizingFunc";

const resizing = express.Router();
const rootPath = path.resolve(".//");

resizing.get("/", async (req: Request, res: Response): Promise<void> => {
  const fileName: string = req.query.toprocess as string;
  const enteredWidth: string = req.query.width as string;
  const enteredHeight: string = req.query.height as string;
  const height: number = parseInt(enteredHeight);
  const width: number = parseInt(enteredWidth);
  const outFilePath: string = path.join(
    rootPath,
    "images",
    "thumbnails",
    `${height}x${width}${fileName}`
  );
  const originalImage: boolean = originals.includes(fileName as string);
  const validValues: boolean = width > 0 && height > 0;
  const notValidValues: boolean = isNaN(width) || isNaN(height);
  const response = modifing(fileName, width, height) as Promise<string>;

  if (req.query) {
    if (fs.existsSync(outFilePath)) {
      res.status(200).sendFile(await response);
    } else if (originalImage) {
      if (validValues && !notValidValues) {
        res.status(200).sendFile(await response);
      } else if (notValidValues || !validValues) {
        res.status(400).send(await response);
      }
    } else if (!originalImage || notValidValues || !validValues) {
      res.status(400).send(await response);
    } else {
      res.status(400).send(await response);
    }
  } else {
    res.status(400).send(await response);
  }
});
export default resizing;
