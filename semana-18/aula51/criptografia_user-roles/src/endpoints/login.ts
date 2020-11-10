import { Request, Response } from "express";
import selectUserByEmail from "../data/selectUserByEmail";
import { generateToken } from "../services/authenticator";
import { compare } from "../services/hashManager";

export default async function login(
  req: Request, res: Response
): Promise<void> {
  try {
    const {email, password} = req.body;

    let message = "Successfully logged"

    if (!email || !password) {
      res.statusCode = 406;
      message = "'email' and 'password' required";
      throw new Error(message);
   }

    const user = await selectUserByEmail(email);
    
    if (!user) {
      res.statusCode = 404;
      message = "User not found or incorrect password";
      throw new Error(message);
   }

    const passwordIsCorrect: boolean = await compare(password, user.password);

    if (!passwordIsCorrect) {
      res.statusCode = 404
      message = "User not found or incorrect password"
      throw new Error(message)
   }

    const token: string = generateToken({ id: user.id, role: user.role });

    res.status(200).send({message, token});

  } catch (error) {
    let { message } = error

    if(message === "Cannot read property 'id' of undefined"){
        message = "User not found or incorrect password"
        res.statusCode = 404
    }

    res.send({message})
  }
}