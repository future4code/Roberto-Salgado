import { Request, Response } from "express"
import selectUsersByNameQuery from "../data/selectUsersByNameQuery"
import { User } from "../types/User";

export const getUsersByNameQuery = async(req: Request,res: Response): Promise<void> =>{
  try {
    const name: string = req.query.name as string;

    if(!name){
      throw new Error("Must enter a 'name' value");
    }

    const users: User[] = await selectUsersByNameQuery(name);

    if(!users.length){
      res.statusCode = 404;
      throw new Error("No users found");
    }

    res.status(200).send({users});
  } catch (err) {
    console.log(err);
    res.send({message: err.message || err.sqlMessage});
  }
}