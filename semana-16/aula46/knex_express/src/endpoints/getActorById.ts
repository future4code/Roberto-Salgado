import { Request, Response } from "express";
import { searchActorById } from "../data/searchActorById";

export const getActorById = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id;
    const actor = await searchActorById(id);

    res.status(200).send(actor)
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
}