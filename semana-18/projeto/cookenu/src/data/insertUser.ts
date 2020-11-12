import { connection } from "..";
import { InputSignUp } from "../types";

export default async function insertUser (
  signupData: InputSignUp
): Promise<void> {
  await connection("cookenu_users")
    .insert({
      id: signupData.id,
      name: signupData.name,
      email: signupData.email,
      role: signupData.role,
      password: signupData.password,
    });
}