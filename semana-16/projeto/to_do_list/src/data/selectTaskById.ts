import { connection } from ".."
import { formatDateStr } from "../handleDate";
import { selectUserById } from "./selectUserById";

export const selectTaskById = async(id: number): Promise<any> => {
  const task = await connection("ToDoListTask")
    .select("*")
    .where("id", id);
    
  return task[0];
}