import express, { Express, Request, Response } from "express";
import cors from "cors";
import { accounts, account, transaction, user } from "./accounts";
import { AddressInfo } from "net";

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get("/users", (req: Request, res: Response) =>{
	try{
    const result = accounts.map(account=>({
      name: account.user.name,
      id: account.user.id,
      dateOfBirth: account.user.dateOfBirth
    }))

		res.status(200).send(accounts);
	}catch(error){
		res.status(400).send({
			message: "Error searching for users"
		});
	}
});

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});