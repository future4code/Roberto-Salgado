import UserDatabase from "../data/UserDatabase";
import { CreateUserInput, LoginInput, User, UserData } from "../model/User";
import authenticator from "../services/authenticator";
import hashManager from "../services/hashManager";
import idGenerator from "../services/idGenerator";

class UserBusiness {
  
  public async signup(
    input: CreateUserInput
  ):Promise<string> {
    try {
      
      const { name, email, password } = input;
  
      if (!name || !email || !password) {
        throw new Error("'name', 'email' and 'password' must be provided");
      }
  
      const id: string = idGenerator.generateId();
  
      const cypherPassword = await hashManager.hash(password);
  
      const newUser: User = new User(
        id,
        name,
        email,
        cypherPassword
      );
  
      await UserDatabase.signup(newUser);
  
      const token: string = authenticator.generateToken({ id });
  
      return token
  
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async login(
    input:LoginInput
  ):Promise<string> {
    try {
      
      const { email, password } = input;
  
      if (!email || !password) {
        throw new Error("'email' and 'password' must be provided");
      }
  
      const queryResult: UserData = await UserDatabase.getUserByEmail(email);
  
      if (!queryResult[0]) {
        throw new Error("Invalid credentials");
      }
  
      const user: User = new User(
        queryResult[0].id,
        queryResult[0].name,
        queryResult[0].email,
        queryResult[0].password
      )
  
      const passwordIsCorrect: boolean = await hashManager.compare(
        password,
        user.getPassword()
      )
  
      if (!passwordIsCorrect) {
        throw new Error("Invalid credentials");
      }
  
      const token: string = authenticator.generateToken({
        id: user.getId()
      });
  
      return token
  
    } catch (error) {
      throw new Error(error.message)
    }
  }

}

export default new UserBusiness()