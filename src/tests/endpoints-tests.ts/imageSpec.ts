import originals from "../../utilities/originalsArray";
import request from "../indexSpec";

const Baseurl = '/routes/apis'
let file :string;

it("get original image", async () : Promise<void> => {
    const response = await request.get(`${Baseurl}/image?file=${file}`);   
    if(file && originals.includes(file)){
        expect(response.status).toBe(200);
    }
    else if(file === undefined || !originals.includes(file)){
        expect(response.status).toBe(404);
    }
})