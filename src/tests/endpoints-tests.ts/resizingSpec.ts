import request from "../indexSpec";
import originals from "../../utilities/originalsArray";

const Baseurl = "/routes/apis";
const errorMessage = `Bad request please enter your file name correctly, and positive values of width and height our avaliable images are: 
        [${originals}]`;
let width :string;
let file :string;
let height: string;

it("enters data for resizing", async (): Promise<void> => {
  const response = await request.get(
    `${Baseurl}/resizing?toprocess=${file}&height=${height}&width=${width}`
  );
  const widthNum = parseInt(width);
  const heightNum = parseInt(height);

  if(file === "hello.jpg" && heightNum === 0 && widthNum === 0){
    expect(response.text).toEqual(errorMessage);
  }
  else if(file === "fjord.jpg" && heightNum === 0 && widthNum === 0){
    expect(response.status).toEqual(200);
  }
  else if(file === "fjord.jpg" && heightNum === 582 && widthNum === 854){
    expect(response.status).toEqual(200);
  }
  else if(file === "hello.jpg" && heightNum === -582 && widthNum === -854){
    expect(response.text).toEqual(errorMessage);
  }
  else{
    expect(response.text).toEqual(errorMessage);
  }
});
