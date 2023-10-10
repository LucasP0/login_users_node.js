import { Router, Request, Response } from "express";
import { UserCreateValidation } from "./middleware/userValidation";
import { Validate } from "./middleware/handleValidation";
import { createUser } from "./controllers/userController";

const router = Router();

export default router.get("/users", 
(req:Request, res:Response) => {
  res.status(200).send("Api Ok");
})
.post("/add", UserCreateValidation(), Validate, createUser);