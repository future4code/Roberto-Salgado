import { Request, Response } from "express";
import { createUser } from "../data/createUser";
import { selectAllUsers } from "../data/selectAllUsers";
import { selectLastUser } from "../data/selectLastUser";

export const putNewUser = async (req: Request, res: Response): Promise<void> => {
  let errorCode = 400;

  try {
    const {name, nickname, email} = req.body;
    
    if(!name || !nickname || !email){
			throw new Error("Missing data for requested operation");
    }

    const users =  await selectAllUsers();
    users.forEach(user => {
      if(user.nickname === nickname){
        errorCode = 406;
        throw new Error("Nickname already registered");
      }
      if(user.email === email){
        errorCode = 406;
        throw new Error("Email alerady registered")
      }
    })

    await createUser(name, nickname, email);

    const lastUser = await selectLastUser();

    res.status(201).send({
      message: "Success creating User",
      user: lastUser
    });
  } catch (err) {
    res.status(errorCode).send({
      message: err.message,
    });
  }
}