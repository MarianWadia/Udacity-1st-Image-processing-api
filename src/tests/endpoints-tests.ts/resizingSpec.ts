import request from "../indexSpec";
import originals from "../../utilities/originalsArray";

const Baseurl = "/routes/apis";
const errorMessage = `Bad request please enter your file name correctly, and positive values of width and height our avaliable images are: 
        [${originals}]`;

it("enters data for resizing", async (file = "hello.jpg", height = 0, width = 0): Promise<void> => {
  const response = await request.get(
    `${Baseurl}/resizing?toprocess=${file}&height=${height}&width=${width}`
  );
  expect(response.text).toEqual(errorMessage);
});

it("tests for valid image", async (file = "fjord.jpg", height = 0, width = 0): Promise<void> => {
  const response = await request.get(
    `${Baseurl}/resizing?toprocess=${file}&height=${height}&width=${width}`
  );
  expect(response.status).toEqual(200);
});

it("tests for valid image and data", async (file = "fjord.jpg", height = 582, width = 854): Promise<void> => {
  const response = await request.get(
    `${Baseurl}/resizing?toprocess=${file}&height=${height}&width=${width}`
  );
  expect(response.status).toEqual(400);
});

it("tests for invalid image and data", async (file = "hello.jpg", height = -582, width = -854): Promise<void> => {
  const response = await request.get(
    `${Baseurl}/resizing?toprocess=${file}&height=${height}&width=${width}`
  );
  expect(response.text).toEqual(errorMessage);
});
