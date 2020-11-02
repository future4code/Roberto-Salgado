import { Request, Response } from "express";
import { selectUsersByQuery } from "../data/selectUsersByQuery";

export const getUserByQuery = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400;

  try {
    const query = req.query.query as string;
    if(!query) throw new Error("Please enter a search value");

    const users = await selectUsersByQuery(query);

    res.status(200).send({users: users});
  } catch (err) {
    res.status(errorCode).send({message: err.message});
  }
}