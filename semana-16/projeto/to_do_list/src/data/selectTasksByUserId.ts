import { connection } from "..";

export const selectTasksByUserId = async (creatorUserId: number): Promise<any[]> => {
  return await connection("ToDoListTask")
    .select("*")
    .where("creator_user_id", creatorUserId);
}