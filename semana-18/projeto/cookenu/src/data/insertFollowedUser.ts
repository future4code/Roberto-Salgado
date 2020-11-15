import { connection } from "..";
import { InputToFollowUser } from "../types/types";

export default async function (
  inputToFollowUser: InputToFollowUser
): Promise<void> {
  try {
    await connection("cookenu_users_relations")
    .insert({
      user_id: inputToFollowUser.userId,
      followed_user_id: inputToFollowUser.userToFollowId
    });
  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
}