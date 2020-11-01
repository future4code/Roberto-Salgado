import { connection } from ".."

export const selectAllTasks = async(): Promise<any[]> => {
  const tasks: any[] = await connection("ToDoListTask")
    .select("*")
  
  return tasks
}