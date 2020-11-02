import { connection } from ".."

export const selectUsersByQuery = async (query: string): Promise<any[]> => {
  return await connection("ToDoListUser")
    .select("id", "nickname")
    .where("nickname", "LIKE", `%${query}%`)
    .orWhere("email", "LIKE", `%${query}%`);
}