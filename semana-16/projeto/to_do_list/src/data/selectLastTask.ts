import { connection } from ".."
import { formatDateStr } from "../handleDate"

export const selectLastTask = async(): Promise<any> => {
  const lastTask = await connection("ToDoListTask")
    .select("*")
    .orderBy("id", "desc")
    .limit(1)

  return {
    id: lastTask[0].id,
    title: lastTask[0].title,
    description: lastTask[0].description,
    status: lastTask[0].status.split('_').join(' '),
    limit_date: formatDateStr(lastTask[0].limit_date),
    creator_user_id: lastTask[0].creator_user_id
  }
}