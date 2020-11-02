import { Request, Response } from "express";
import { selectTasksByUserId } from "../data/selectTasksByUserId";
import { selectUserById } from "../data/selectUserById";

export const getTasksByUserId = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400;

  try {
    const creatorUserId: number = Number(req.query.creatorUserId);

    if(!creatorUserId){
      throw new Error("Please enter creator user id")
    }

    const user = await selectUserById(creatorUserId);
    if(!user){
      errorCode = 404;
      throw new Error("User not found")
    }

    const tasks = await selectTasksByUserId(creatorUserId)

    res.status(200).send({
      tasks: tasks
    })    
  } catch (err) {
    res.status(errorCode).send({
      message: err.message,
    });
  }
}