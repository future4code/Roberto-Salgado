import { Request, Response } from "express"
import selectUsersByTypeParams from "../data/selectUsersByTypeParams";

export const getUsersByTypeParams = async(req: Request,res: Response): Promise<void> =>{
  try {
    const {type} = req.params;

    if(!type){
      throw new Error("Must enter a 'type' value");
    }

    const validTypeValues = ["Teacher", "Operations", "CX"];
    if(!validTypeValues.includes(type)){
      throw new Error("'type' values must be 'Teacher', 'Operations' or 'CX'");
    }

    const users = await selectUsersByTypeParams(type);

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