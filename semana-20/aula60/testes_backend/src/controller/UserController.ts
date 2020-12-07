import { Request, Response } from "express";
import userBusiness from "../business/UserBusiness";
import { stringToUserRole, UserRole } from "../model/User";
import tokenGenerator, { AuthenticationData } from "../services/tokenGenerator";

export class UserController {

   public async signup(req: Request, res: Response) {
      try {
         const { name, role, email, password } = req.body
         const result = await userBusiness.signup(
            name,
            email,
            password,
            role
         );
         res.status(200).send(result);
      } catch (error) {
         const { statusCode, message } = error
         res.status(statusCode || 400).send({ message });
      }
   }

   public async login(req: Request, res: Response) {
      try {
         const { email, password } = req.body
         const result = await userBusiness.login(email, password);
         res.status(200).send(result);
      } catch (error) {
         const { statusCode, message } = error
         res.status(statusCode || 400).send({ message });
      }
   }

   public async getUserById(req: Request, res: Response) {
      try {
         const { id } = req.params
         const result = await userBusiness.getUserById(id);
         res.status(200).send(result);
      } catch (error) {
         const { statusCode, message } = error
         res.status(statusCode || 400).send({ message });
      }
   }

   public async getAllUsers(req: Request, res: Response) {
      try {
         const token: string = req.headers.authorization as string;
         const tokenData: AuthenticationData = tokenGenerator.verify(token);
         const role: UserRole = stringToUserRole(tokenData.role)
         const result = await userBusiness.getAllUsers(role);
         res.status(200).send(result);
      } catch (error) {
         const { statusCode, message } = error
         res.status(statusCode || 400).send({ message });
      }
   }

   public async getProfile(req: Request, res: Response) {
      try {
         const token: string = req.headers.authorization as string;
         const tokenData: AuthenticationData = tokenGenerator.verify(token);
         const result = await userBusiness.getUserById(tokenData.id);
         res.status(200).send(result);
      } catch (error) {
         const { statusCode, message } = error
         res.status(statusCode || 400).send({ message });
      }
   }
}

export default new UserController()