import mongoose from "mongoose";
import config from "config";
import Logger from "./logger";

async function connect(){ 
  const dbUri = config.get<string>("dbUri");

  try {
    await mongoose.connect(dbUri)
    Logger.info("Conexão estabelicida")
  } catch (e) {
    Logger.error("Não foi possivel conectar");
    Logger.error(`Error: ${e}`)
  }
};

export default connect