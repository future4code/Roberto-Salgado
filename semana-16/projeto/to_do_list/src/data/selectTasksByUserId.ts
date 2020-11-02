import { connection } from "..";
import { formatDateStr } from "../handleDate";
import { selectUserById } from "./selectUserById";

export const selectTasksByUserId = async (creatorUserId: number): Promise<any[]> => {
  const tasks: any[] = await connection("ToDoListTask")
    .select("*")
    .where("creator_user_id", creatorUserId);
  
  const creatorUser = await selectUserById(creatorUserId);

  return tasks.map(task=>(
    {
      taskId: task.id,
      title: task.title,
      description: task.description,
      status: task.status.split('_').join(' '),
      limitDate: formatDateStr(task.limit_date),
      creatorUserId,
      creatorUserNickname: creatorUser.nickname
    }
  ))
}