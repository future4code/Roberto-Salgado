import { compare } from "bcryptjs";
import selectUserByEmail from "../../data/user/selectUserByEmail";
import { LoginInput, User } from "../../model/User";
import { generateToken } from "../../services/authenticator";

export default async function loginBusiness(
  input:LoginInput
):Promise<string> {
  try {
    
    const { email, password } = input;

    if (!email || !password) {
      throw new Error("'email' and 'password' must be provided");
    }

    const queryResult: User[] | [] = await selectUserByEmail(email);

    if (!queryResult[0]) {
      throw new Error("Invalid credentials");
    }

    const user: User = {
      id: queryResult[0].id,
      name: queryResult[0].name,
      email: queryResult[0].email,
      password: queryResult[0].password
    }

    const passwordIsCorrect: boolean = await compare(password, user.password)

    if (!passwordIsCorrect) {
      throw new Error("Invalid credentials");
    }

    const token: string = generateToken({
      id: user.id
    });

    return token

  } catch (error) {
    throw new Error(error.message)
  }
}