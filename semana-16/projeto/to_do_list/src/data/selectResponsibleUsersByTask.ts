import { connection } from "..";

export const selectResponsibleUsersByTask = async (
  taskId: number
): Promise<any[]> => {
  return await connection("ToDoListResponsibleUserTaskRelation")
    .select("responsible_user_id")
    .where("task_id", taskId)
}