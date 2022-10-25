import express from "express";
import image from "./apis/image";
import resizing from "./apis/resizing";
// import {promises as fsPromises} from "fs";
const routes = express.Router();
routes.get('/', (_req, res)=>{
    res.send("The main api")
});

routes.use('/image', image)
routes.use('/resizing', resizing);


export default routes;


