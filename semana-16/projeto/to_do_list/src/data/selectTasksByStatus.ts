import { connection } from "..";

export const selectTasksByStatus = async (status: string): Promise<any[]> => {
  return await connection("ToDoListTask")
    .join("ToDoListUser", "ToDoListTask.creator_user_id", "ToDoListUser.id")
    .select(
      "ToDoListTask.id as taskId",
      "ToDoListTask.title as title",
      "ToDoListTask.description as description",
      "ToDoListTask.limit_date as limitDate",
      "ToDoListTask.creator_user_id as creatorUserId",
      "ToDoListUser.nickname as nickname"
    )
    .where("ToDoListTask.status", status)
}