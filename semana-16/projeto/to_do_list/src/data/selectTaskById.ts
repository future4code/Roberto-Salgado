import { connection } from ".."
import { formatDateStr } from "../handleDate";
import { selectUserById } from "./selectUserById";

export const selectTaskById = async(id: number): Promise<any> => {
  const result = await connection("ToDoListTask")
    .select("*")
    .where("id", id)
  
  const task = result[0]

  const user = await selectUserById(task.creator_user_id);

  return {
    taskId: task.id,
    title: task.title,
    description: task.description,
    status: task.status.split('_').join(' '),
    limitDate: formatDateStr(task.limit_date),
    creatorUserId: task.creator_user_id,
    creatorUserNickname: user.nickname
  }
}