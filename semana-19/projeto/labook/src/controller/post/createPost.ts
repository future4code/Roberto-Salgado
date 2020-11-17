import { Request, Response } from "express";
import createPostBusiness from "../../business/post/createPostBusiness";
import { CreatePostInput } from "../../model/Post";
import { AuthenticationData } from "../../model/User";
import { getTokenData } from "../../services/authenticator";

export default async function createPost(
  req:Request, res: Response
):Promise<void> {
  try {

    const token: string = req.headers.authorization as string;

    const tokenData: AuthenticationData = getTokenData(token);
    
    const input: CreatePostInput = {
      photo: req.body.photo,
      description: req.body.description,
      type: req.body.type,
      authorId: tokenData.id
    };

    await createPostBusiness(input);

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