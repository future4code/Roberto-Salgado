import { connection } from ".."
import { currDate } from "../handleDate";

export const selectDelayedTasks = async (): Promise<any[]> => {
  return await connection("ToDoListTask")
    .join("ToDoListUser", "ToDoListTask.creator_user_id", "ToDoListUser.id")
    .select(
      "ToDoListTask.id as taskId",
      "ToDoListTask.title as title",
      "ToDoListTask.description as description",
      "ToDoListTask.status as status",
      "ToDoListTask.limit_date as limitDate",
      "ToDoListUser.id as creatorUserId",
      "ToDoListUser.nickname as creatorUserNickname"
    )
    .where("ToDoListTask.limit_date", "<", currDate)
    .andWhereNot("ToDoListTask.status", "done")
}