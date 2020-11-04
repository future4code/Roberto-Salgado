import { connection } from ".."

export const selectUserById = async (id: number): Promise<any> => {
  const user = await connection("ToDoListUser")
    .select("*")
    .where("id", id);
    
  return user[0];
}