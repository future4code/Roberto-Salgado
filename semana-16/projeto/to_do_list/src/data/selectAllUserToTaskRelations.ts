import { connection } from ".."

export const selectAllUserToTaskRelations = async(): Promise<any[]> => {
  const userToTaskRelations: any[] = 
    await connection("ToDoListResponsibleUserTaskRelation")
      .select("*")
  
  return userToTaskRelations;
}