import { Request, Response } from "express";
import { selectAllUsers } from "../data/selectAllUsers";
import { selectResponsibleUsersByTask } from "../data/selectResponsibleUsersByTask";
import { selectTaskById } from "../data/selectTaskById";
import { selectUserById } from "../data/selectUserById";
import { formatDateStr } from "../handleDate";

export const getTaskById = async (req: Request, res: Response): Promise<void> => {
  let errorCode: number = 400;

  try {
    const taskId: number = Number(req.params.id);

    if(!taskId){
      throw new Error("Please enter task id");
    }

    const task = await selectTaskById(taskId);

    if(!task){
      errorCode = 404;
      throw new Error("Task not found");
    }

    const creatorUserId: number = task.creator_user_id;

    const responsibleUsers = await selectResponsibleUsersByTask(taskId);

    const allUsers = await selectAllUsers();

    res.status(200).send({
      taskId: task.id,
      title: task.title,
      description: task.description,
      status: task.status.split('_').join(' '),
      limitDate: formatDateStr(task.limit_date),
      creatorUserId,
      creatorUserNickname: allUsers
        .filter(user => user.id === creatorUserId)
        .map(user => user.nickname)[0],
      responsibleUsers: responsibleUsers.map(responsibleUser => {
        const responsibleUserId: number = responsibleUser.responsible_user_id;
        return {
          id: responsibleUserId,
          nickname: allUsers
            .filter(user => user.id === responsibleUserId)
            .map(user => user.nickname)[0]
        }
      })
    });
  } catch (err) {
    res.status(errorCode).send({message: err.message});
  }
}