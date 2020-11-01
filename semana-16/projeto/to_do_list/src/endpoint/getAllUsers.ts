import { Request, Response } from "express";
import { selectAllUsers } from "../data/selectAllUsers";

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await selectAllUsers();

    res.status(200).send({
      users: users.map(user => ({id: user.id, nickname: user.nickname}))
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
}