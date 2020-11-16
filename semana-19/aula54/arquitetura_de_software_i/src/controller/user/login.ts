import { Request, Response } from "express";
import loginBusiness from "../../business/loginBusiness";
import { LoginInput } from "../../types/types";

export default async function login (req: Request, res: Response) {

  try {

    const loginData: LoginInput = {
      email: req.body.email,
      password: req.body.password
    };

    const token = await loginBusiness(loginData);

    res.status(200).send({ token });

  } catch (error) {
    res.status(400).send({ error: error.message });
  }

  // await destroyConnection();

}