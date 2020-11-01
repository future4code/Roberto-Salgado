import { Request, Response } from "express";
import { selectAllTasks } from "../data/selectAllTasks";

export const getAllTasks = async (req: Request, res: Response): Promise<void> => {
  try {
    const task = await selectAllTasks();

    res.status(200).send(task)
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
}