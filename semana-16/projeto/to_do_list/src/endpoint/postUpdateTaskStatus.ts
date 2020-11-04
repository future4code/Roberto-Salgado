import { Request, Response } from "express";
import { selectTaskById } from "../data/selectTaskById";
import { updateTaskStatus } from "../data/updateTaskStatus";

export const postUpdateTaskStatus = 
  async (req: Request, res: Response): Promise<void> => {
  
  let errorCode: number = 400;

  try {
    const {taskId, status} = req.body;

    if(!taskId || !status) throw new Error("Missing data for requested operation");

    if(taskId === null || status === ""){
      errorCode = 406;
      throw new Error("Cannot enter empty values");
    }

    const task = await selectTaskById(taskId);
    if(task.status === status.split(' ').join('_')){
      errorCode = 406;
      throw new Error(`Task '${taskId}' already has '${status}' status`);
    }

    await updateTaskStatus(taskId, status.split(' ').join('_'));

    res.status(200).send({
      message: `Success updating task status`,
      task: {id: taskId, status}
    });
  } catch (err) {
    res.status(errorCode).send({message: err.message});
  }
}