import { Request, Response } from "express";
import insertUser from "../data/insertUser";
import { generateToken } from "../services/authenticator";
import generateId from "../services/idGenerator";
import { hash } from "../services/hashManager";

export default async function signup(
  req: Request, res: Response
): Promise<void> {
  try {
    const {email, password, role} = req.body;

    if(!email || email.indexOf("@") === -1){
      throw new Error("Invalid email");
    }

    if(!password || password < 6){
      throw new Error("Invalid password");
    }

    const id = generateId();

    const hashPassword = await hash(password);

    await insertUser(id, email, hashPassword, role);

    const token = generateToken({ id, role });

    res.status(201).send({message: "Registered successfully", token});
  } catch (error) {
    res.status(400).send({message: error.message});
  }
}