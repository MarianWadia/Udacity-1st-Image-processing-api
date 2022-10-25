
import request from "../indexSpec";
import sharp from "sharp";

const Baseurl = '/routes/apis'
let width :string;
let height :string;
let file :string;

it("enters data for resizing", async () : Promise<void> => {
    const response = await request.get(`${Baseurl}/resizing?toprocess=${file}&height=${height}&width=${width}`); 
    const parsedHeight :number = parseInt(height);
    const parsedWidth :number = parseInt(width);  

    if(parsedHeight < 0 || parsedWidth < 0 ){
        expect(response.status).toBe(400);
    }
    else if(file && parsedHeight && parsedWidth){
        expect(response.status).toBe(202);
        expect(sharp(file).resize(parsedHeight,  parsedWidth)).toBeTruthy;
    }
})