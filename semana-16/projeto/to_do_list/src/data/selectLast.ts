import { connection } from ".."

export const selectLast = async(): Promise<any> => {
  const lastId = await connection("ToDoListUser")
    .select("id")
    .orderBy("id", "desc")
    .limit(1)
  
    return lastId
}