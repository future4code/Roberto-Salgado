import { Request, Response } from "express";
import insertFollowedUser from "../data/insertFollowedUser";
import selectUserById from "../data/selectUserById";
import { AuthenticationData, getTokenData } from "../services/authenticator";
import { InputToFollowUser } from "../types/types";

export default async function followUser (
  req: Request, res: Response
): Promise<void> {
  try {
    const token: string = req.headers.authorization as string;
   
    const authenticationData: AuthenticationData = getTokenData(token);

    const { userToFollowId } = req.body;

    if (!userToFollowId) {
      res.statusCode = 406;
      throw new Error("User to follow id required");
    }

    if (authenticationData.id === userToFollowId) {
      res.statusCode = 406;
      throw new Error("Cannot follow own profile");
    }

    const userToFollow = await selectUserById(userToFollowId);

    if (!userToFollow) {
      res.statusCode = 404;
      throw new Error("User not found");
    }

    const inputToFollowUser: InputToFollowUser = {
      userId: authenticationData.id,
      userToFollowId
    };

    await insertFollowedUser(inputToFollowUser);

    res.status(201).send({
      message: "Followed successfully"
    });

  } catch (error) {
    let { message } = error;

    if(
      message === "jwt must be provided" ||
      message === "invalid signature" ||
      message === "jwt expired"
    ){
      res.statusCode = 401;
      message = "Unauthorized";
    }

    if (message.includes("Duplicate entry")) {
      res.statusCode = 406;
      message = "Already following user";
    }

    res.send({message});
  }
}