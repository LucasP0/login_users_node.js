import { body } from "express-validator";

export const UserCreateValidation = () => {
  return [
    body("name")
      .isString()
      .withMessage("Preencha todos os campos")
      .isLength({ min: 4 }),
    body("email")
      .isEmail()
      .withMessage("Preencha todos os campos"),
    body("password")
      .isString()
      .withMessage("preencha todos os campos")
      .isLength({ min: 10 })
      .withMessage("Sua senha tem que ter no minimo 10 caracteres")
  ]
};