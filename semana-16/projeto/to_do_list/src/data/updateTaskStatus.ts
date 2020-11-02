import { connection } from "..";

export const updateTaskStatus 
  = async (taskId: number, status: string): Promise<void> => {
  await connection("ToDoListTask").update({status}).where("id", taskId);
}