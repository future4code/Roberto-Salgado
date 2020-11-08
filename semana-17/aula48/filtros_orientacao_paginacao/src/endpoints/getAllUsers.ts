import { Request, Response } from "express";
import selectAllUsers from "../data/selectAllUsers";
import { User } from "../types/User";

export const getAllUsers = async (req: Request,res: Response): Promise<void> =>{
  try {
    const users: User[] = await selectAllUsers();

    if(!users.length){
      res.statusCode = 404;
      throw new Error("No recipes found");
    }

    res.status(200).send({users});
  } catch (err) {
    res.send({message: err.message || err.sqlMessage});
  }
}