import { connection } from ".."

export const selectUserById = async (id: number): Promise<any> => {
  const result = await connection("ToDoListUser")
    .select("*")
    .where("id", id)
  
  // .raw(`
  //   SELECT * FROM User WHERE id = "${id}"
  // `)
  return result[0]
}