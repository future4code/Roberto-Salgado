import { Post, PostData, PostLikeData, PostLikeInput, POST_TYPES } from "../model/Post";
import BaseDatabase from "./BaseDatabase";
import UserDatabase from "./UserDatabase";

class PostDatabase extends BaseDatabase {

  private static postsTableName: string = "labook_posts";
  private static likesTableName: string = "labook_posts_likes";
  private static commentsTableName: string = "labook_posts_comments";

  public getPostsTableName = ():string => PostDatabase.postsTableName;
  public getLikesTableName = ():string => PostDatabase.likesTableName;
  public getCommentsTableName = ():string => PostDatabase.commentsTableName;

  public async createPost(
    post:Post
  ):Promise<void> {
    try {
      
      await BaseDatabase
        .connection(PostDatabase.postsTableName)
        .insert({
          id: post.getId(),
          photo: post.getPhoto(),
          description: post.getDescription(),
          type: post.getType(),
          author_id: post.getAuthorId()
        });
  
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getPostById(
    id:string
  ):Promise<Array<PostData>> {
    try {
      
      const result: PostData[] = await BaseDatabase
        .connection(PostDatabase.postsTableName)
        .select("*")
        .where({ id });
  
      return result;
  
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getFeed(
    id:string
  ):Promise<Array<PostData>> {
    try {
      
      const query1: PostData[] = await BaseDatabase
        .connection(`${PostDatabase.postsTableName} as p`)
        .leftJoin(
          `${UserDatabase.getFriendsTableName()} as uf`,
          'p.author_id',
          'uf.user_two_id'
        )
        .select('p*')
        .where('uf.user_one_id', id);
      
      const query2: PostData[] = await BaseDatabase
        .connection(`${PostDatabase.postsTableName} as p`)
        .leftJoin(
          `${UserDatabase.getFriendsTableName()} as uf`,
          'p.author_id',
          'uf.user_one_id'
        )
        .select('p*')
        .where('uf.user_two_id', id);

      const result: PostData[] = [...query1, ...query2];
      
      return result;

    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getPostByType(
    type: POST_TYPES
  ):Promise<Array<PostData>> {
    try {
      
      const result: PostData[] = await BaseDatabase
        .connection(PostDatabase.postsTableName)
        .select('*')
        .where({ type });

      return result

    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getPostLike(
    input: PostLikeInput
  ):Promise<PostLikeData> {
    try {

      const result: PostLikeData = await BaseDatabase
        .connection(PostDatabase.likesTableName)
        .select('*')
        .where({
          post_id: input.postId,
          user_id: input.userId
        });

      return result
      
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async likePost(
    input: PostLikeInput
  ):Promise<void> {
    try {

      await BaseDatabase
        .connection(PostDatabase.likesTableName)
        .insert({
          post_id: input.postId,
          user_id: input.userId
        })
      
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async dislikePost(
    input: PostLikeInput
  ):Promise<void> {
    try {

      await BaseDatabase
        .connection(PostDatabase.likesTableName)
        .where({
          post_id: input.postId,
          user_id: input.userId
        })
        .del();
      
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

}

export default new PostDatabase();