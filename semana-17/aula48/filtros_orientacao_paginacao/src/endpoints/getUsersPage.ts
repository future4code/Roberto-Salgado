import { Request, Response } from "express"
import { selectUsersPage } from "../data/selectUsersPage";
import { User } from "../types/User";

export const getUsersPage = async(req: Request, res: Response): Promise<void> => {
  try {
    const page: number = Number(req.query.page) <= 0 
      ? 1 : Number(req.query.page) || 1

    const users: User[] = await selectUsersPage(page);

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