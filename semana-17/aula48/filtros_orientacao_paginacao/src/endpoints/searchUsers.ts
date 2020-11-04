import { Request, Response } from "express";
import { filterUsers } from "../data/filterUsers";
import { inputData, User } from "../types/User";

export const searchUsers = async (req: Request, res: Response): Promise<any> => {
  try {
    const data: inputData = {
      name: req.query.name as string || "",
      type: req.params.type || "%",
      orderBy: req.query.orderBy as string || "name",
      orderType: req.query.orderType as string || "DESC",
      page: Number(req.query.page) <= 0 ? 1 : Number(req.query.page) || 1
    }

    if(data.type && data.type !== "%"){
      const validTypeValues = ["Teacher", "Operations", "CX"];
      if(!validTypeValues.includes(data.type)){
        throw new Error("'type' values must be 'Teacher', 'Operations' or 'CX'");
      }
    }
    
    const validOrderByValues: string[] = ["name", "type"];
    if(!validOrderByValues.includes(data.orderBy)){
      throw new Error("'orderBy' values must be 'name' or 'type'");
    }

    const validOrderTypeValues: string[] = ["ASC", "DESC"];
    if(!validOrderTypeValues.includes(data.orderType)){
      throw new Error("'orderType' values must be 'ASC' or 'DESC'");
    }

    const users: User[] = await filterUsers(data);

    if(!users.length){
      res.statusCode = 404;
      throw new Error("No users found");
    }

    res.status(200).send({users});
  } catch (err) {
    res.send({message: err.message || err.sqlMessage});
  }
}