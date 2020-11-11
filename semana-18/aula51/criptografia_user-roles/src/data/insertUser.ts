import { connection } from "..";

export enum USER_ROLES {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN"
}

export default async function insertUser (
  id: string, email: string, password: string, role: USER_ROLES
): Promise<void> {
  await connection.insert({id,email,password,role}).into("aula50_User");
}