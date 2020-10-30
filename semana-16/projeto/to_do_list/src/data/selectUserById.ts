import { connection } from ".."

export const selectUserById = async (id: number): Promise<any> => {
  const result = await connection("ToDoListUser")
    .select("*")
    .where("id", id)
  return result[0]
}