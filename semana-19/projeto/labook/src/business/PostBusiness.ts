import PostDatabase from "../data/PostDatabase";
import { CreatePostInput, Post, PostComment, PostCommentInput, PostData, PostLikeData, PostLikeInput, POST_TYPES } from "../model/Post";
import { CustomError } from "../services/CustomError";
import idGenerator from "../services/idGenerator";

class PostBusiness {

  public async createPost(
    input:CreatePostInput
  ):Promise<void> {
    try {

      const { photo, description, type, authorId } = input;

      if (!photo || !description) {
        throw new Error("'photo' and 'description' must be provided");
      }
      
      const id: string = idGenerator.generateId();
  
      const newPost: Post = new Post(
        id,
        photo,
        description,
        type,
        authorId
      )
  
      await PostDatabase.createPost(newPost);
  
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async getPostById(
    id:string
  ):Promise<Post> {
    try {
      
      const queryResult: PostData[] = await PostDatabase.getPostById(id);
  
      if (!queryResult[0]) {
        throw new CustomError(404, "Post not found");
      }
  
      const post: Post = new Post(
        queryResult[0].id,
        queryResult[0].photo,
        queryResult[0].description,
        queryResult[0].type,
        queryResult[0].author_id,
        queryResult[0].created_at
      );
  
     return post;
  
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async getFeed(
    id:string
  ):Promise<Array<Post>> {
    try {
      
      const queryResult: PostData[] = await PostDatabase.getFeed(id);
  
      const posts = queryResult.map(post => (
        new Post(
          post.id,
          post.photo,
          post.description,
          post.type,
          post.author_id,
          post.created_at
        )
      ));

      return posts;
      
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async getPostsByType(
    type: string
  ):Promise<Array<Post>> {
    try {

      let searchedType: POST_TYPES = POST_TYPES.NORMAL;

      if (type.toUpperCase() === POST_TYPES.EVENT) {
        searchedType = POST_TYPES.EVENT;
      } else if (type && type.toUpperCase() !== POST_TYPES.NORMAL) {
        throw new Error("Invalid post type");
      }
      
      const queryResult: PostData[] 
        = await PostDatabase.getPostByType(searchedType);

      const posts = queryResult.map(post => (
        new Post(
          post.id,
          post.photo,
          post.description,
          post.type,
          post.author_id,
          post.created_at
        )
      ));

      return posts;

    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async toggleLike(
    input: PostLikeInput
  ):Promise<void> {
    try {

      const post: PostData[] = await PostDatabase.getPostById(input.postId);
    
      if (!post[0]) {
        throw new CustomError(404, "Post not found");
      }

      const postLike: PostLikeData = await PostDatabase.getPostLike(input);

      if (!postLike.length) {
        await PostDatabase.likePost(input);
      } else {
        await PostDatabase.dislikePost(input);
      }
      
    } catch (error) {
      throw new Error(error.message);
    }    
  }

  public async commentPost(
    input: PostCommentInput
  ):Promise<void> {
    try {

      const { userId, postId, message } = input;

      if (!message) {
        throw new Error("'message' must be provided");
      }

      const post: PostData[] = await PostDatabase.getPostById(postId);
    
      if (!post[0]) {
        throw new CustomError(404, "Post not found");
      }

      const id: string = idGenerator.generateId();

      const newComment: PostComment = {
        id,
        userId,
        postId,
        message
      }

      await PostDatabase.commentPost(newComment);
      
    } catch (error) {
      throw new Error(error.message);
    }
  }

}

export default new PostBusiness();