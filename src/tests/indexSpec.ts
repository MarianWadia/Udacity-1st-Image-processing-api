import app from "../index";
import supertest from "supertest";

const request = supertest(app);

const Baseurl = "/routes/apis";

it("test main route", async (): Promise<void> => {
  const response = await request.get(Baseurl);
  expect(response.status).toBe(301);
});

export default request;
