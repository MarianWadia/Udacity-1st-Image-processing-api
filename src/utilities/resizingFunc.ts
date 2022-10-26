import sharp from "sharp";

const process = async (inputFile :string, width :number , height :number, outFile :string) : Promise<void> =>{
    await sharp(inputFile).resize(height, width).toFile(outFile);
}
export default process;