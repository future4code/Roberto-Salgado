import { Request, Response } from "express";
import { insertUserToTask } from "../data/insertUserToTask";
import { selectAllUserToTaskRelations } from "../data/selectAllUserToTaskRelations";
import { selectTaskById } from "../data/selectTaskById";
import { selectUserById } from "../data/selectUserById";
import { selectUsersByQuery } from "../data/selectUsersByQuery";

export const postUserToTask = async(req: Request, res: Response): Promise<void> => {
  let errorCode: number = 400;

  try {
    const {taskId, responsibleUserId} = req.body;

    if(!taskId || !responsibleUserId){
      throw new Error("Missing data for requested operation");
    }

    const task = await selectTaskById(taskId);
    if(!task){
      errorCode = 404;
      throw new Error("Task not found")
    }

    const user = await selectUserById(responsibleUserId);
    if(!user){
      errorCode = 404;
      throw new Error("User not found")
    }

    const userToTaskRelations = await selectAllUserToTaskRelations();
    userToTaskRelations.forEach(task => {
      if(task.task_id === taskId){
        if(task.responsible_user_id === responsibleUserId){
          throw new Error("Task already assigned to user")
        }
      }
    });

    await insertUserToTask(taskId, responsibleUserId);

    res.status(201).send({
      message: `Task ${task.title} assigned to user ${user.nickname}`
    })
  } catch (err) {
    res.status(errorCode).send({message: err.message});
  }
}