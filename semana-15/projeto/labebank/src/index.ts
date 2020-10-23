import express, { Express, Request, Response } from "express";
import cors from "cors";
import { accounts, account, transaction, user } from "./accounts";
import { AddressInfo } from "net";

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get("/users", (req: Request, res: Response): void =>{
	try{
    const result: user[] = accounts.map(account=>({
      name: account.user.name,
      id: account.user.id,
      dateOfBirth: account.user.dateOfBirth
    }))

		res.status(200).send(result);
	}catch(error){
		res.status(400).send({
			message: "Error searching for users"
		});
	}
});

app.post("/users", (req: Request, res: Response)=>{
  let errorCode: number = 400
  let errorMessage: string = "Error creating account"
  type successMessage = {
    message: string,
    account: account
  }

  try {
		const {name, id, dateOfBirth} = req.body;

    if(!name || !id || !dateOfBirth){
      errorCode = 400
      errorMessage = "Favor informar nome, CPF e data de nascimento."
      throw new Error()
    }

    const userIndex: number = accounts.findIndex(account => account.user.id === id)
    if(userIndex > -1) {
      errorCode = 403
      errorMessage = "CPF já cadastrado"
      throw new Error()
    }

    const newAccount: account = {user: {name, id, dateOfBirth}, balance: 0, statement: []}

    accounts.push(newAccount)

    const successMessage: successMessage = {
      "message": "Success!",
      "account": newAccount
    }

    res.status(200).send(successMessage)
  } catch(error) {
    res.status(errorCode).send(errorMessage)
  }
})

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});