import { connection } from ".."

export const insertUserToTask = async (
  taskId: number, responsibleUserId: number
): Promise<void> => {
  await connection("ToDoListResponsibleUserTaskRelation")
    .insert({
      task_id: taskId,
      responsible_user_id: responsibleUserId
    })
}