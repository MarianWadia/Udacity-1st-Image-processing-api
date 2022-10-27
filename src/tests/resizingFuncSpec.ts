import modifing from "../utilities/resizingFunc";
import originals from "../utilities/originalsArray";
import path from "path";

const rootPath = path.resolve(".//");
const erroeMessage = `Bad request please enter your file name correctly, and positive values of width and height our avaliable images are: 
        [${originals}]`;
// const ImagePath: string = path.join(rootPath, 'images', 'originals', `${imageName}`);
// const outFilePath: string = path.join(rootPath, 'images', 'thumbnails', `${height}x${width}${imageName}`);
// const originalImage: boolean = originals.includes(imageName as string);
// const validValues: boolean = width > 0 && height > 0;
// const notValidValues: boolean = isNaN(width) || isNaN(height);

describe("the resizing functions of images", () => {
  it("tests when all data is right", async () => {
    const imageName = "fjord.jpg";
    const height = 578;
    const width = 984;
    const outFilePath: string = path.join(
      rootPath,
      "images",
      "thumbnails",
      `${height}x${width}${imageName}`
    );
    const response = await modifing(imageName, width, height);
    expect(response).toEqual(outFilePath);
  });
  it("tests when all data is right", async () => {
    const imageName = "hello.jpg";
    const height = 0;
    const width = 0;
    const response = await modifing(imageName, width, height);
    expect(response).toEqual(erroeMessage);
  });
  it("tests when all data is right", async () => {
    const imageName = "fjord.jpg";
    const height = 0;
    const width = 0;
    const ImagePath: string = path.join(
      rootPath,
      "images",
      "originals",
      `${imageName}`
    );
    const response = await modifing(imageName, width, height);
    expect(response).toEqual(ImagePath);
  });
  it("tests when all data is right", async () => {
    const imageName = "fjord.jpg";
    const height = -895;
    const width = -985;
    // const ImagePath: string = path.join(rootPath, 'images', 'originals', `${imageName}`);
    const response = await modifing(imageName, width, height);
    expect(response).toEqual(erroeMessage);
  });
});
