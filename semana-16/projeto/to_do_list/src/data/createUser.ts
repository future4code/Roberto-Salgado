import { connection } from ".."

export const createUser = async (
  name: string, nickname: string, email: string
): Promise<void> => {
  await connection("ToDoListUser")
    .insert({name, nickname, email})
}