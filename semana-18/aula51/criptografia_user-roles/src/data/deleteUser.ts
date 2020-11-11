import { connection } from "..";

export default async function deleteUser (id: string): Promise<any> {
  await connection("aula50_User")
    .delete()
    .where({ id });
}