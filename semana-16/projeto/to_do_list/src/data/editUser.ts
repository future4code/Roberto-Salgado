import { connection } from "..";

export const editUser = async (id: number, body: any): Promise<any> => {
  await connection("ToDoListUser")
    .update({
      name: body.name,
      nickname: body.nickname,
      email: body.email
    })
    .where("id", id);
};