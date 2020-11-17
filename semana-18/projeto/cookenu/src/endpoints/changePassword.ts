import { Request, Response } from "express";
import selectUserById from "../data/selectUserById";
import { updateUserPassword } from "../data/updateUserPassword";
import { AuthenticationData, getTokenData } from "../services/authenticator";
import { hash } from "../services/hashManager";

export default async function resetPassword (req: Request, res: Response) {
  try {
    const token: string = req.headers.authorization as string;
   
    const authenticationData: AuthenticationData = getTokenData(token);

    const {password} = req.body;

    if(!password || password < 6){
      throw new Error("Invalid password");
    }

    const hashPassword = await hash(password);

    const PasswordUpdateData = {
      id: authenticationData.id,
      newPassword: hashPassword
    }

    await updateUserPassword(PasswordUpdateData);

    res.status(200).send({message: "Password updated successfully"});

  } catch (error) {
    res.statusCode = 400;
    let { message } = error;

    res.send({message});
  }
}