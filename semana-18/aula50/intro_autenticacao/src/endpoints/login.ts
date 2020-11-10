import { Request, Response } from "express";
import selectUserByEmail from "../data/selectUserByEmail";
import { generateToken } from "../services/authenticator";

export default async function login(
  req: Request, res: Response
): Promise<void> {
  try {
    const {email, password} = req.body;

    if(!email || email.indexOf("@") === -1){
      throw new Error("Invalid email");
    }

    const userData = {
      email, password
    };

    const user = await selectUserByEmail(userData.email);

    if(user.password !== userData.password){
      throw new Error("Invalid password")
    }

    const token = generateToken({
      id: user.id
    });

    res.status(200).send({token});
  } catch (error) {
    res.status(400).send({message: error.message});
  }
}