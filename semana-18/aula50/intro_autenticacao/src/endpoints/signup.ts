import { Request, Response } from "express";
import insertUser from "../data/insertUser";
import { generateToken } from "../services/authenticator";
import generateId from "../services/idGenerator";

export default async function signup(
  req: Request, res: Response
): Promise<void> {
  try {
    const {email, password} = req.body;

    if(!email || email.indexOf("@") === -1){
      throw new Error("Invalid email");
    }

    if(!password || password < 6){
      throw new Error("Invalid password");
    }

    const userData = {
      email, password
    };

    const id = generateId();

    await insertUser(id, userData.email, userData.password);

    const token = generateToken({
      id
    });

    res.status(201).send({token});
  } catch (error) {
    res.status(400).send({message: error.message});
  }
}