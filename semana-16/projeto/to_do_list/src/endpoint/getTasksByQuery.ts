import { Request, Response } from "express";
import { selectTasksByStatus } from "../data/selectTasksByStatus";
import { selectTasksByUserId } from "../data/selectTasksByUserId";
import { selectUserById } from "../data/selectUserById";
import { formatDateStr } from "../handleDate";

export const getTasksByQuery = async (req: Request, res: Response): Promise<void> => {
  let errorCode: number = 400;
  let tasks: any[] = [];

  try {
    const creatorUserId: number = Number(req.query.creatorUserId);
    const status: string = req.query.status as string;

    if(creatorUserId){
      const creatorUser = await selectUserById(creatorUserId);
      if(!creatorUser){
        errorCode = 404;
        throw new Error("User not found");
      }

      tasks = (await selectTasksByUserId(creatorUserId)).map(task=>(
        {
          taskId: task.id,
          title: task.title,
          description: task.description,
          status: task.status.split('_').join(' '),
          limitDate: formatDateStr(task.limit_date),
          creatorUserId,
          creatorUserNickname: creatorUser.nickname
        }
      ));
    }

    if(status){
      tasks = (await selectTasksByStatus(status))
      .map(task=>(
        {
          ...task,
          limitDate: formatDateStr(task.limitDate)
        }
      ))
    }

    res.status(200).send({tasks: tasks});
  } catch (err) {
    res.status(errorCode).send({message: err.message});
  }
}