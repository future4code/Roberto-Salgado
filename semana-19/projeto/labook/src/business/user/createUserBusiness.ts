import insertUser from "../../data/user/insertUser";
import { CreateUserInput, InsertUserData } from "../../model/User";
import { generateToken } from "../../services/authenticator";
import { hash } from "../../services/hashManager";
import { generateId } from "../../services/idGenerator";

export default async function createUserBusiness(
  input: CreateUserInput
):Promise<string> {
  try {
    
    const { name, email, password } = input;

    if (!name || !email || !password) {
      throw new Error("'name', 'email' and 'password' must be provided");
    }

    const id: string = generateId();

    const cypherPassword = await hash(password);

    const data: InsertUserData = {
      id,
      name,
      email,
      password: cypherPassword
    };

    await insertUser(data);

    const token: string = generateToken({ id });

    return token

  } catch (error) {
    throw new Error(error.message);
  }
}