import { compare } from "bcryptjs";
import getUserByEmail from "../../data/user/getUserByEmail";
import { generateToken } from "../../services/authenticator";
import { LoginInput } from "../../types/types";

export default async function loginBusiness (loginData: LoginInput) {

  const userFromDB = await getUserByEmail(loginData.email);

  const hashCompare = await compare(
    loginData.password, userFromDB.password
  );

  const accessToken = generateToken({
    id: userFromDB.id,
    role: userFromDB.role
  });

  if (!hashCompare) {
    throw new Error("Invalid Password!");
  }

  return accessToken;
}