import { connection } from "..";

export default async function selectUserById(id: string): Promise<any> {
  return (await connection("aula50_User").select("*").where({ id }))[0];
}