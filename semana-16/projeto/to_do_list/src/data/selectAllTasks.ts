import { connection } from "..";
import { formatDateStr } from "../handleDate";
import { selectAllUsers } from "./selectAllUsers";

export const selectAllTasks = async(): Promise<any[]> => {
  const tasks: any[] = await connection("ToDoListTask").select("*")
  
  const users = await selectAllUsers();
  
  return tasks.map(task=>(
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
  ));
}