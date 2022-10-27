import { Request, Response } from "express";
import express from "express";
import image from "./apis/image";
import resizing from "./apis/resizing";

const routes = express.Router();
routes.get("/", (_req: Request, res: Response) => {
  res.send("The main api");
});

routes.use("/image", image);
routes.use("/resizing", resizing);

export default routes;
