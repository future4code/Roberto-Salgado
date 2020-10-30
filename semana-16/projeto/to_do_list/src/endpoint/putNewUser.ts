import { Request, Response } from "express";
import { createUser } from "../data/createUser";
import { selectLast } from "../data/selectLast";

export const putNewUser = async (req: Request, res: Response) => {
  try {
    const {name, nickname, email} = req.body;
    
    if(!name || !nickname || !email){
			throw new Error("Missing data for requested operation");
    }

    await createUser(
      name,
      nickname,
      email
    );

    const lastUser = await selectLast()

    res.status(200).send({
      message: "Success creating User",
      user: lastUser
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
}