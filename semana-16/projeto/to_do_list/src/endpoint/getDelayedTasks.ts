import { Request, Response } from "express";
import { selectDelayedTasks } from "../data/selectDelayedTasks";
import { formatDateStr } from "../handleDate";

export const getDelayedTasks 
  = async (req: Request, res: Response): Promise<void> => {
  
  let errorCode: number = 400;

  try {
    const tasks = (await selectDelayedTasks()).map(task=>(
      {
        ...task,
        limitDate: formatDateStr(task.limitDate)
      }
    ))

    res.status(200).send({
      tasks
    });
  } catch (err) {
    res.status(errorCode).send({message: err.message});
  }


}