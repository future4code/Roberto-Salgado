import { Request, Response } from "express";
import deleteUser from "../data/deleteUser";
import { getTokenData } from "../services/authenticator";

export default async function removeUser (req: Request, res: Response) {
  try {
    const token = req.headers.authorization as string;

    const authenticationData = getTokenData(token);

    if (authenticationData.role !== "ADMIN") {
      throw new Error("Only a admin user can access this funcionality");
    }

    const id = req.params.id;

    await deleteUser(id);

    res.sendStatus(200);
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
}