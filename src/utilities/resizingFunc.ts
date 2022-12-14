import path from "path";
import sharp from "sharp";
import originals from "./originalsArray";

const process = async (
  inputFile: string,
  width: number,
  height: number,
  outFile: string
): Promise<void> => {
  await sharp(inputFile).resize(height, width).toFile(outFile);
};
const rootPath = path.resolve(".\\");
const modifing = async (
  imageName: string,
  width: number,
  height: number
): Promise<string | undefined> => {
  const ImagePath: string = path.join(
    rootPath,
    "images",
    "originals",
    `${imageName}`
  );
  const outFilePath: string = path.join(
    rootPath,
    "images",
    "thumbnails",
    `${height}x${width}${imageName}`
  );
  const originalImage: boolean = originals.includes(imageName as string);
  const validValues: boolean = width > 0 && height > 0;
  const notValidValues: boolean = isNaN(width) || isNaN(height);

  if (originalImage && width === 0 && height === 0) {
    return ImagePath;
  } else if (validValues && originalImage) {
    await process(ImagePath, height, width, outFilePath);
    return outFilePath;
  } else if (!originalImage || notValidValues || !validValues) {
    const message = `Bad request please enter your file name correctly, and positive values of width and height our avaliable images are: 
        [${originals}]`;
    return message;
  } else {
    const message = `Bad request please enter your file name correctly, and positive values of width and height our avaliable images are: 
        [${originals}]`;
    return message;
  }
};
export default modifing;
