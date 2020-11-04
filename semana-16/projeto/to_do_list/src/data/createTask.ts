import { connection } from ".."
import { formatdDateToDB } from "../handleDate"

export const createTask = async (
  title: string,
  description: string,
  limitDate: string,
  creatorUserId: number
): Promise<void> => {
  await connection("ToDoListTask")
    .insert({
      title,
      description,
      limit_date: formatdDateToDB(limitDate),
      creator_user_id: creatorUserId
    })
}