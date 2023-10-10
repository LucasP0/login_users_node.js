import { Request, Response } from "express";
import { UserModel } from "../models/user";
import Logger from "../../config/logger";

export const createUser = async (req: Request, res: Response) => {
  try {

    const data = req.body;
    const user = await UserModel.create(data);

    return res.status(201).json(user);


  } catch (e: any) {
    Logger.error(`Erro no sistema: ${e.message}`);
    return res.status(500).json({ error: "Por favor, tente mais tarde"})
  }

};