import express from "express";
import routes from "./routes/index";

const app = express();
const port = 5000;

app.use(express.static("build"));

app.listen(port, () :void => {
  console.log(`The server is running on port ${port}`);
});

app.use("/routes/apis", routes);
export default app;
