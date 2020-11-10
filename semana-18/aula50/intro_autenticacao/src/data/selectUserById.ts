import { connection } from "..";

export default async function selectUserById(id: string): Promise<any> {
  return (
    await connection
      .select("*")
      .from("aula50_User")
      .where({ id })
  )[0];
}