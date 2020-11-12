import { Request, Response } from "express";
import insertUser from "../data/insertUser";
import { generateToken } from "../services/authenticator";
import generateId from "../services/idGenerator";
import { hash } from "../services/hashManager";
import { InputSignUp } from "../types";

export default async function signup(
  req: Request, res: Response
): Promise<void> {
  try {
    const {name, email, role, password} = req.body;

    if(!email || !email.includes("@")){
      throw new Error("Invalid email");
    }

    if(!password || password < 6){
      throw new Error("Invalid password");
    }

    const id = generateId();

    const hashPassword = await hash(password);

    const signupData: InputSignUp = {
      id,
      name,
      email, 
      role,
      password: hashPassword
    }

    await insertUser(signupData);

    const token = generateToken({ id, role });

    res.status(201).send({access_token: token});
  } catch (error) {
    res.status(400).send({message: error.message});
  }
}