import { connection } from "..";

export const editUser = async (id: number, body: any): Promise<void> => {
  await connection("ToDoListUser")
    .update({
      name: body.name,
      nickname: body.nickname,
      email: body.email
    })
    .where("id", id);
};