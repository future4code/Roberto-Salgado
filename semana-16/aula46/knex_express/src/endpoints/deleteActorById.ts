import { Request, Response } from "express";
import { deleteActor } from "../data/deleteActor";

export const deleteActorById = async (req: Request, res: Response) => {
  try {
    await deleteActor(req.params.id);
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
}