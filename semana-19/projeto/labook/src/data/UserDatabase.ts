import { User, UserData } from "../model/User";
import BaseDatabase from "./BaseDatabase";

class UserDatabase extends BaseDatabase {

  private static tableName: string = "labook_users";

  public getTableName = ():string => UserDatabase.tableName;

  public async signup(
    user:User
  ):Promise<void> {
    try {
      await BaseDatabase.connection(UserDatabase.tableName)
        .insert({
          id: user.getId(),
          name: user.getName(),
          email: user.getEmail(),
          password: user.getPassword()
        });
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getUserByEmail(
    email: string
  ):Promise<UserData> {
    try {
      const result = await BaseDatabase.connection(UserDatabase.tableName)
        .select("*")
        .where({ email });
      
        return result;
    } catch (error) {
      throw new Error(error.slqMessage || error.message);
    }
  }

}

export default new UserDatabase();