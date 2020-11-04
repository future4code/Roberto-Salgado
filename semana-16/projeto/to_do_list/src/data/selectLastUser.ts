import { connection } from ".."

export const selectLastUser = async(): Promise<any> => {
  const lastUser = await connection("ToDoListUser")
    .select("*")
    .orderBy("id", "desc")
    .limit(1)
  
    return lastUser[0]
}