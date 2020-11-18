import { User, UserData } from "../model/User";
import { connection } from "./connection";

class UserDatabase {

  private tableName: string = "labook_users";

  public getTableName = ():string => this.tableName;

  public async signup(
    user:User
  ):Promise<void> {
    try {
      await connection(this.tableName)
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
      const result = await connection(this.tableName)
        .select("*")
        .where({ email });
      
        return result;
    } catch (error) {
      throw new Error(error.slqMessage || error.message);
    }
  }

}

export default new UserDatabase();