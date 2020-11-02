import { Request, Response } from "express";
import { selectTaskById } from "../data/selectTaskById";

export const getTaskById = async (req: Request, res: Response): Promise<void> => {
  let errorCode: number = 400;

  try {
    const id: number = Number(req.params.id);

    if(!id){
      throw new Error("Please enter task id")
    }

    const task = await selectTaskById(id);

    if(!task){
      errorCode = 404;
      throw new Error("Task not found");
    }

    res.status(200).send(task)
  } catch (err) {
    res.status(errorCode).send({
      message: err.message
    })
  }
}