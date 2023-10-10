// ENV variables
require("dotenv").config();

import express from "express";
import config from "config";
import router from "./router";
import db from "../config/db";
import Logger from "../config/logger";
import morganMiddleware from "./middleware/morganMiddle";


const app = express();


app.use(express.json());
app.use(morganMiddleware);
app.use("/api/", router);

const port = config.get<number>("port")

app.listen(port, async () => {
  await db();
  Logger.info("A aplicação está ativa na porta 3000...")
})