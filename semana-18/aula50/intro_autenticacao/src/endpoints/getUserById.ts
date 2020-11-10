import { Request, Response } from "express";
import selectUserById from "../data/selectUserById";
import { getTokenData } from "../services/authenticator";

export default async function getUserById(
  req: Request, res: Response
): Promise<void> {
  try {
    const token = req.headers.authorization as string;
   
    const authenticationData = getTokenData(token);

    const user = await selectUserById(authenticationData.id);

    res.status(200).send({
      id: user.id,
      email: user.email,
    });
  } catch (error) {
    let { message } = error;

      if(
         message === "jwt must be provided" ||
         message === "invalid signature" ||
         message === "jwt expired"
      ){
         res.statusCode = 401;
         message = "Não autorizado";
      }

      res.send({message});
  }
}