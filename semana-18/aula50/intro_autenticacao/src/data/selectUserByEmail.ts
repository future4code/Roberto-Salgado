import { connection } from "..";

export default async function selectUserByEmail (
  email: string 
): Promise<any> {
  return (
    await connection
      .select("*")
      .from("aula50_User")
      .where({email})
  )[0];
};