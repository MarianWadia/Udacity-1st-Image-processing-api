import app from "../index";
import supertest from "supertest";
import originals from "../utilities/originalsArray";
import sharp from "sharp";
// import routes from "../routes/"

const request = supertest(app);
const Baseurl = '/routes/apis'
let width :string;
let height :string;
let file :string;

describe("image suite", () => {
    it("test main route", async () : Promise<void> => {
        const response = await request.get(Baseurl);
        expect(response.status).toBe(301);
    })
    it("get original image", async () : Promise<void> => {
        const response = await request.get(`${Baseurl}/image?file=${file}`);   
        if(file && originals.includes(file)){
            expect(response.status).toBe(200);
        }
        else if(file === undefined || !originals.includes(file)){
            expect(response.status).toBe(404);
        }
    })
    it("first data", async () : Promise<void> => {
        const response = await request.get(`${Baseurl}/resizing?toprocess=${file}&height=${height}&width=${width}`); 
        const parsedHeight :number = parseInt(height);
        const parsedWidth :number = parseInt(width);  
        if(file && parsedHeight && parsedWidth){
            // expect(response.status).toBe(202);
            expect(sharp(file).resize(parsedHeight,  parsedWidth)).toBeTruthy;
        }
        else if(parsedHeight < 0 || parsedWidth < 0 ){
            expect(response.status).not.toBe(400);
        }
    })
})




