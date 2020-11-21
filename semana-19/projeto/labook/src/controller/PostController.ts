import { Request, Response } from "express";
import PostBusiness from "../business/PostBusiness";
import { CreatePostInput, Post, PostLikeInput } from "../model/Post";
import { AuthenticationData } from "../model/User";
import authenticator from "../services/authenticator";

class PostController {

  public async createPost(
    req:Request, res: Response
  ):Promise<void> {
    try {
  
      const token: string = req.headers.authorization as string;
  
      const tokenData: AuthenticationData = authenticator.getTokenData(token);
      
      const input: CreatePostInput = {
        photo: req.body.photo,
        description: req.body.description,
        type: req.body.type,
        authorId: tokenData.id
      };
  
      await PostBusiness.createPost(input);
  
      res
        .status(201)
        .send({
          message: "Success!"
        });
  
    } catch (error) {
      res
        .status(400)
        .send({
          message: error.message
        });
    }
  }

  public async getPostById(
    req:Request, res:Response
  ):Promise<void> {
    try {
      
      const { id } = req.params;
  
      const post: Post = await PostBusiness.getPostById(id);
  
      res.send({
        message: "Success",
        post
      });
  
    } catch (error) {
      res
        .status(400)
        .send({
          message: error.message
        });
    }
  }

  public async getFeed(
    req:Request, res:Response
  ):Promise<void> {
    try {
      
      const token: string = req.headers.authorization as string;
  
      const tokenData: AuthenticationData = authenticator.getTokenData(token);

      const posts = await PostBusiness.getFeed(tokenData.id);

      res
        .status(200)
        .send({
          message: "Success!",
          posts
        })

    } catch (error) {
      res
        .status(400)
        .send({
          message: error.message
        });
    }
  }

  public async getPostsByType(
    req:Request, res:Response
  ):Promise<void> {
    try {
      
      const token: string = req.headers.authorization as string;
  
      authenticator.getTokenData(token);

      const posts = await PostBusiness.getPostsByType(req.params.type);

      res
        .status(200)
        .send({
          message: "Success!",
          posts
        })

    } catch (error) {
      res
        .status(400)
        .send({
          message: error.message
        });
    }
  }

  public async toggleLike(
    req:Request, res:Response
  ):Promise<void> {
    try {

      const token: string = req.headers.authorization as string;
  
      const tokenData: AuthenticationData = authenticator.getTokenData(token);

      const input: PostLikeInput = {
        userId: tokenData.id,
        postId: req.params.id
      }

      await PostBusiness.toggleLike(input)

      res
        .status(200)
        .send({
          message: "Success!",
        })
      
    } catch (error) {
      res
        .status(400)
        .send({
          message: error.message
        });
    }
  }

}

export default new PostController();