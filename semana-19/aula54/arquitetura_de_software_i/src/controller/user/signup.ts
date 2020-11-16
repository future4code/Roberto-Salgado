import { Request, Response } from "express";
import signupBusiness from "../../business/signupBusiness";
import { UserInput } from "../../types/types";

export default async function signup (req: Request, res: Response) {

  try {
    const input: UserInput = {
      email: req.body.email,
      name: req.body.name,
      password: req.body.password,
      role: req.body.role
    }

    const token = await signupBusiness(input);

    res.status(200).send({ token });

  } catch (error) {
    res.status(400).send({ error: error.message });
  }

}