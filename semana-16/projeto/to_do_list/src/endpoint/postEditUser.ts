import { Request, Response } from "express";
import { editUser } from "../data/editUser";
import { selectAllUsers } from "../data/selectAllUsers";
import { selectUserById } from "../data/selectUserById";

export const postEditUser = async (req: Request, res: Response): Promise<void> => {
  let errorCode: number = 400;

  try {
    const id = Number(req.params.id);

    let user = await selectUserById(id);

    if(!user){
      errorCode = 404;
      throw new Error("User not found")
    }

    const {name, nickname, email} = req.body

    if(name === "" || nickname === "" || email === ""){
      errorCode = 406;
      throw new Error("Cannot enter empty values");
    }

    const users =  await selectAllUsers();
    users.forEach(user => {
      if(user.id !== id){
        if(user.nickname === nickname){
          errorCode = 406;
          throw new Error("Nickname already registered");
        }
        if(user.email === email){
          errorCode = 406;
          throw new Error("Email alerady registered")
        }
      }
    })

    await editUser(id, req.body);

    user = await selectUserById(id);

    res.status(200).send({
      message: "Success updating user",
      user
    });
  } catch (err) {
    res.status(errorCode).send({message: err.message});
  }
}