import { Request, Response } from "express";
import { countActorsByGender } from "../data/countActorsByGender";

export const getActorCountByGender = async (req: Request, res: Response): Promise<void> => {
  try {
    const count = await countActorsByGender(req.query.gender as string);
    res.status(200).send({
      quantity: count,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
};