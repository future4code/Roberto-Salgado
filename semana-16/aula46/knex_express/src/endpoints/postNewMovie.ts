import { Request, Response } from "express";
import { createMovie } from "../data/createMovie";

export const postNewMovie = async (req: Request, res: Response) => {
  try {
    await createMovie(
      req.body.id,
      req.body.title,
      req.body.synopsis,
      req.body.releaseDate,
      req.body.rating,
      req.body.playingLimitDate
    );

    res.status(200).send({
      message: "Success"
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
}