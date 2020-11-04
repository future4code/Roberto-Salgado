import { connection } from "..";

export const selectAllTasks = async(): Promise<any[]> => {
  return await connection("ToDoListTask").select("*");
}