import { connection } from ".."

export const selectAllUsers = async(): Promise<any[]> => {
  const users: any[] = await connection("ToDoListUser")
    .select("*")
  
    return users
}