import { Request, Response } from "express";
import selectUserById from "../data/selectUserById";
import { getTokenData } from "../services/authenticator";

export default async function getUserById(
  req: Request, res: Response
): Promise<void> {
  try {
    const token = req.headers.authorization as string;

    getTokenData(token);
	
    const id = req.params.id;

    const user = await selectUserById(id);

    res.status(200).send({
      id: user.id,
      email: user.email,
      role: user.role,
    });

  } catch (error) {
    let { message } = error;

    if(
      message === "jwt must be provided" ||
      message === "invalid signature" ||
      message === "jwt expired"
    ){
      res.statusCode = 401;
      message = "Unauthorized";
    }

    res.send({message});
  }
}