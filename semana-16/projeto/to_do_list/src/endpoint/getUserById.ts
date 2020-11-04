import { Request, Response } from "express";
import { selectUserById } from "../data/selectUserById";

export const getUserById = async (req: Request, res: Response): Promise<void> => {
  let errorCode: number = 400;
  
  try {
    const {id} = req.params;
    if(!id){
      throw new Error("Please enter user id")
    }

    const user = await selectUserById(Number(id));

    if(!user){
      errorCode = 404;
      throw new Error("User not found")
    }

    res.status(200).send(user)
  } catch (err) {
    res.status(errorCode).send({
      message: err.message,
    });
  }
}