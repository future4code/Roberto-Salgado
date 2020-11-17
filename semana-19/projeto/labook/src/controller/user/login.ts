import { Request, Response } from "express"
import loginBusiness from "../../business/user/loginBusiness"
import { LoginInput } from "../../model/User"

export default async function login(
  req:Request, res:Response
):Promise<void> {
  try {

    const input: LoginInput = {
      email: req.body.email,
      password: req.body.password
    }

    const token: string = await loginBusiness(input)

    res.send({
      message: "Success!",
      token
    })
    
  } catch (error) {
    res
      .status(400)
      .send({
        message: error.message
      })
  }
}