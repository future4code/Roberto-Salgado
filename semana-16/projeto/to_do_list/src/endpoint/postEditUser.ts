import { Request, Response } from "express";
import { editUser } from "../data/editUser";
import { selectUserById } from "../data/selectUserById";

export const postEditUser = async (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    let user = await selectUserById(Number(req.params.id));

    if(!user){
      errorCode = 404;
      throw new Error("User not found")
    }

    const {name, nickname, email} = req.body

    if(name === "" || nickname === "" || email === ""){
      errorCode = 406;
      throw new Error("Cannot enter empty values")
    }

    await editUser(Number(req.params.id), req.body);

    user = await selectUserById(Number(req.params.id));

    res.status(200).send({
      message: "Success",
      user
    });
  } catch (err) {
    res.status(errorCode).send({
      message: err.message,
    });
  }
}