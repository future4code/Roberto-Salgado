import { Request, Response } from "express";
import { createTask } from "../data/createTask";
import { selectLastTask } from "../data/selectLastTask";
import { selectUserById } from "../data/selectUserById";

export const putNewTask = async (req: Request, res: Response): Promise<void> => {
  let errorCode: number = 400;

  try {
    const {title, description, limitDate, creatorUserId} = req.body;

    if(!title || !description || !limitDate || !creatorUserId){
      throw new Error("Missing data for requested operation")
    }

    const user = await selectUserById(creatorUserId);
    if(!user){
      errorCode = 404;
      throw new Error("User not found")
    }

    await createTask(title, description, limitDate, creatorUserId);

    const lastTask = await selectLastTask();

    res.status(201).send({
      message: "Success creating task",
      task: lastTask
    });
  } catch (err) {
    res.status(errorCode).send({
      message: err.message
    })
  }
}