import { connection } from ".."

export const selectAllUserToTaskRelations = async(): Promise<any[]> => {
  return await connection("ToDoListResponsibleUserTaskRelation").select("*");
}