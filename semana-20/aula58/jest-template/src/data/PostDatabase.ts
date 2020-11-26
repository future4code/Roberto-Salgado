import { BaseDatabase } from "./BaseDatabase";
import dotenv from "dotenv";

dotenv.config();

class PostDatabase extends BaseDatabase {
  private static TABLE_NAME = "aula58_posts";

  public async createPost(
    id: string,
    title: string,
    content: string
  ): Promise<void> {
    await BaseDatabase.connection
      .insert({
        id,
        title,
        content
      })
      .into(PostDatabase.TABLE_NAME);
  }

  public async getPostById(id: string): Promise<any> {
    const result = await BaseDatabase.connection
      .select("*")
      .from(PostDatabase.TABLE_NAME)
      .where({ id });

    return result[0];
  }

  public async deletePost(id: string): Promise<any> {
    await BaseDatabase.connection
      .delete()
      .from(PostDatabase.TABLE_NAME)
      .where({ id });
  }
}

export default new PostDatabase()