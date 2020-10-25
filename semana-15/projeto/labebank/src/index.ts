import express, { Express, Request, Response } from "express";
import cors from "cors";
import { accounts, account, transaction, user } from "./accounts";
import { getAge, getToday } from "./handleDate";
import { AddressInfo } from "net";

const app: Express = express();

app.use(express.json());
app.use(cors());

type ErrorMessage = {message: string}

app.get("/users", (req: Request, res: Response): void =>{
	try{
    const result: user[] = accounts.map(account=>({
      name: account.user.name,
      id: account.user.id,
      dateOfBirth: account.user.dateOfBirth
    }));

		res.status(200).send(result);
	}catch(error){
		res.status(400).send({
			message: "Error searching for users"
		});
	}
});

app.get("/accounts/balance/:id", (req: Request, res: Response): void =>{
  let errorCode: number = 400;
  const errorMessage: ErrorMessage = {message:"Error getting user balance"}

  type userBalance = {name: string, id: number}
  type balance = {user: userBalance, balance: number}
  
  try{
    const searchedAccount: account | undefined = accounts.find(
      account => account.user.id === Number(req.params.id)
    )

    if(!searchedAccount){
      errorCode = 404;
      errorMessage.message = "Account not found";
      throw new Error();
    }

    const balance: balance = {
      user: {name: searchedAccount.user.name, id: searchedAccount.user.id},
      balance: searchedAccount.balance
    }

    res.status(200).send(balance);
  }catch(error){
    res.status(errorCode).send(errorMessage)
  }
})

app.post("/accounts", (req: Request, res: Response)=>{
  let errorCode: number = 400;
  let errorMessage: ErrorMessage = {message: "Error creating account"};
  type successMessage = {
    message: string,
    account: account
  }

  try {
		const {name, id, dateOfBirth} = req.body;

    if(!name || !id || !dateOfBirth){
      errorCode = 400;
      errorMessage.message = "Favor informar nome, CPF e data de nascimento.";
      throw new Error();
    }

    const userIndex: number = accounts.findIndex(account => account.user.id === id);
    if(userIndex > -1) {
      errorCode = 403;
      errorMessage.message = "CPF já cadastrado";
      throw new Error();
    }
    
    const newUserAge: number = getAge(dateOfBirth);
    if(newUserAge < 18){
      errorCode = 403;
      errorMessage.message = "Não é permitido abrir conta para menores de 18 anos";
      throw new Error();
    }

    const newAccount: account = {user: {name, id, dateOfBirth}, balance: 0, statement: []};

    accounts.push(newAccount);

    const successMessage: successMessage = {
      "message": "Success!",
      "account": newAccount
    };

    res.status(200).send(successMessage)
  } catch(error) {
    res.status(errorCode).send(errorMessage)
  }
})

app.put("/accounts/balance", (req: Request, res: Response): void =>{
  let errorCode = 400;
  const errorMessage: ErrorMessage = {message:"Error updating users"}
  
  try{
    const {id, name, value} = req.body;
    
    if(!id || !name || value){
      errorMessage.message = "Missing data for requested operation";
			throw new Error();
    }

    const accountIndex: number = accounts.findIndex(account => account.user.id === id);
    if(accountIndex === -1) {
      errorCode = 404;
      errorMessage.message = "Account not found";
      throw new Error();
    }

    if(accounts[accountIndex].user.name !== name){
      errorCode = 403;
      errorMessage.message = "Name doesn't match the one registered for this account id";
      throw new Error();
    }
    
    const newTransaction: transaction = {
      value,
      date: getToday(),
      description: "Depósito de dinheiro"
    }
    
    accounts[accountIndex].balance += value;
    accounts[accountIndex].statement = [
      newTransaction,
      ...accounts[accountIndex].statement
    ]

		res.status(200).send({
      message: `R$ ${value.toFixed(2)} added to the account`,
      user: {name, id}
    });
  }catch(erro){
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