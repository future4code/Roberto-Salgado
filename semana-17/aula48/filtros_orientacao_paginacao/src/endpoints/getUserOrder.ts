import { Request, Response } from "express"
import { selectUsersOrder } from "../data/selectUsersOrder";
import { User } from "../types/User";

export const getUsersOrder = async(req: Request,res: Response): Promise<void> =>{
  try {
    const orderBy: string = req.query.orderBy as string || "name";
    const orderType: string = req.query.orderType as string || "ASC";

    const validOrderByValues = ["name", "type"];
    if(!validOrderByValues.includes(orderBy)){
      throw new Error("'orderBy' values must be 'name' or 'type'");
    }

    const validOrderTypeValues = ["ASC", "DESC"];
    if(!validOrderTypeValues.includes(orderType)){
      throw new Error("'orderType' values must be 'ASC' or 'DESC'");
    }

    const users: User[] = await selectUsersOrder(orderBy, orderType);

    if(!users.length){
      res.statusCode = 404;
      throw new Error("No users found");
    }

    res.status(200).send({users});
  } catch (err) {
    res.send({message: err.message || err.sqlMessage});
  }
}