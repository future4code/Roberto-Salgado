import { Request, Response } from "express";
import { selectTaskById } from "../data/selectTaskById";
import { selectUserById } from "../data/selectUserById";
import { formatDateStr } from "../handleDate";

export const getTaskById = async (req: Request, res: Response): Promise<void> => {
  let errorCode: number = 400;

  try {
    const id: number = Number(req.params.id);

    if(!id){
      throw new Error("Please enter task id");
    }

    const task = await selectTaskById(id);

    if(!task){
      errorCode = 404;
      throw new Error("Task not found");
    }

    const user = await selectUserById(task.creator_user_id);

    res.status(200).send({
      taskId: task.id,
      title: task.title,
      description: task.description,
      status: task.status.split('_').join(' '),
      limitDate: formatDateStr(task.limit_date),
      creatorUserId: task.creator_user_id,
      creatorUserNickname: user.nickname
    });
  } catch (err) {
    res.status(errorCode).send({message: err.message});
  }
}