import { Request, Response } from "express";
import getPostByIdBusiness from "../../business/post/getPostByIdBusiness";
import { Post } from "../../model/Post";

export default async function getPostById(
  req:Request, res:Response
):Promise<void> {
  try {
    
    const { id } = req.params;

    const post: Post = await getPostByIdBusiness(id);

    res.send({
      message: "Success",
      post
    })

  } catch (error) {
    res
      .status(400)
      .send({
        message: error.message
      });
  }
}