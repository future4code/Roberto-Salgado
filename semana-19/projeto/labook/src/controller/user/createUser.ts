import { Request, Response } from "express";
import createUserBusiness from "../../business/user/createUserBusiness";
import { CreateUserInput } from "../../model/User";

export default async function createUser(
  req:Request, res:Response
):Promise<void> {
  try {
    
    const input: CreateUserInput = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    };

    const token = createUserBusiness(input);

    res
      .status(201)
      .send({
        message: "Success!",
        token
      });

  } catch (error) {
    res
      .status(400)
      .send({
        message: error.message
      });
  }
}