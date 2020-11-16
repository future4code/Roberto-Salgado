import { Request, Response } from "express";
import getAllUsersBusiness from "../../business/user/getAllUsersBusiness";

export default async function getAllUsers(req: Request, res: Response) {

  try {

    const token = req.headers.authorization!;
    const users = await getAllUsersBusiness(token);

    res.send(users).status(200);

  } catch (error) {
    res.send({ message: error.message }).status(error.status);
  }
  
}