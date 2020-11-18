import { Request, Response } from "express";
import deleteUserBusiness from "../../business/user/deleteUserBusiness";
import { DeleteInput } from "../../types/types";

export default async function deleteUser(req: Request, res: Response) {
  
  try {
    const input: DeleteInput = {
      id: req.params.id,
      token: req.headers.authorization!
    }

    await deleteUserBusiness(input);

    res.status(200).send({ message: "Usuário apagado com sucesso" });

  } catch (error) {
      res.status(400).send({ error: error.message });
  }

  // await destroyConnection();
}