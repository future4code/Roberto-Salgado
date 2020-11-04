import { connection } from ".."
import { formatDateStr } from "../handleDate"
import { selectUserById } from "./selectUserById"

export const selectLastTask = async(): Promise<any> => {
  const lastTask = await connection("ToDoListTask")
    .select("*")
    .orderBy("id", "desc")
    .limit(1)

  const task = lastTask[0];
  const user = await selectUserById(task.creator_user_id);

  return {
    id: task.id,
    title: task.title,
    description: task.description,
    status: task.status.split('_').join(' '),
    limitDate: formatDateStr(task.limit_date),
    creatorUserId: task.creator_user_id,
    creatorUserNickame: user.nickname
  }
}