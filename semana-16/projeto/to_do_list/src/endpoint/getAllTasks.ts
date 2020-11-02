import { Request, Response } from "express";
import { selectAllTasks } from "../data/selectAllTasks";
import { selectAllUsers } from "../data/selectAllUsers";
import { formatDateStr } from "../handleDate";

export const getAllTasks = async (req: Request, res: Response): Promise<void> => {
  try {
    const tasks = await selectAllTasks();

    const users = await selectAllUsers();

    res.status(200).send({
      tasks: tasks.map(task=>(
        {
          taskId: task.id,
          title: task.title,
          description: task.description,
          status: task.status.split('_').join(' '),
          limitDate: formatDateStr(task.limit_date),
          creatorUserId: task.creator_user_id,
          creatorUserNickname: users
            .filter(user => user.id === task.creator_user_id)
            .map(user => user.nickname)[0]
        }
      ))
    })
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
}