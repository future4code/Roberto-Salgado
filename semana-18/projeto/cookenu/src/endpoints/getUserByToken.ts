import { Request, Response } from "express";
import selectUserById from "../data/selectUserById";
import { getTokenData } from "../services/authenticator";

export default async function getUserByToken(
  req: Request, res: Response
): Promise<void> {
  try {
    const token = req.headers.authorization as string;
   
    const authenticationData = getTokenData(token);

    if(authenticationData.role !== "NORMAL"){
      throw new Error("Only a normal user can access this functionality");
    }

    const user = await selectUserById(authenticationData.id);

    res.status(200).send({
      id: user.id,
      name: user.name,
      email: user.email
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