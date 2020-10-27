//importando express com Request e Response e cors
import express, {Request, Response} from 'express';
import cors from 'cors';
//extra: importando configuração de rede do node
import { AddressInfo } from "net";
//iniciando a aplicação web com express
const app = express();

//ativando os módulos de Bodyparser e cors
app.use(express.json());
app.use(cors());

enum USER_TYPE {
	ADMIN= "ADMIN",
	NORMAL = "NORMAL"
}

type User = {
	id: number,
	name: string,
	email: string,
	type: USER_TYPE,
	age: number
}
type Users = User[]

type ErrorMessage = {message: string}

let users: Users = [
	{
		id: 1,
		name: "Alice",
		email: "alice@email.com",
		type: USER_TYPE.ADMIN,
		age: 12
	},
	{
		id: 2,
		name: "Bob",
		email: "bob@email.com",
		type: USER_TYPE.NORMAL,
		age: 36
	},
	{
		id: 3,
		name: "Coragem",
		email: "coragem@email.com",
		type: USER_TYPE.NORMAL,
		age: 21
	},
	{
		id: 4,
		name: "Dory",
		email: "dory@email.com",
		type: USER_TYPE.NORMAL,
		age: 17
	},
	{
		id: 5,
		name: "Elsa",
		email: "elsa@email.com",
		type: USER_TYPE.ADMIN,
		age: 17
	},
	{
		id: 6,
		name: "Fred",
		email: "fred@email.com",
		type: USER_TYPE.ADMIN,
		age: 60
	}
]

app.get("/users", (req: Request, res: Response): void =>{

	try{
		res.status(200).send(users);
	}catch(error){
		res.status(400).send({
			message: "Error searching for users"
		});
	}
});

app.get("/users/search", (req: Request, res: Response): void => {
	const errorMessage:{message: string} = {message:"Error searching for users"}
	let errorCode: number = 400

	try{
		const usersByName: Users = users.filter(
			user=>user.name.toLowerCase().includes(String(req.query.name).toLowerCase())
		)

		if(!usersByName.length) {
			errorCode = 404
			errorMessage.message = "User Not Found"
		}

		res.status(200).send(usersByName)
	}catch(error){
		res.status(errorCode).send(errorMessage)
	}
})

app.get("/users/:type", (req: Request, res: Response): void =>{
	const searchedType: string = req.params.type.toUpperCase()
	const errorMessage = {message:"Error searching for users"}
	let errorCode = 400
	
	try{
		if(!(searchedType in USER_TYPE)){
			errorCode = 422
			errorMessage.message = "Invalid enum val"
			throw new Error()
		}

		const usersByType: Users = users.filter(user=>user.type === searchedType)

		if(!usersByType.length) {
			errorCode = 404
			errorMessage.message = "Users Not Found"
		}

		res.status(200).send(usersByType);
	}catch(error){
		res.status(errorCode).send(errorMessage);
	}
});

app.post("/users", (req: Request, res: Response): void=>{
	let errorCode = 400
	const errorMessage: ErrorMessage = {message:"Error inserting users"}

	try{
		const {id, name, email, age, type} = req.body;

		if(!id || !name || !email || !age || !type) {
			errorMessage.message = "Missing data for creating users"
			throw new Error()
		}

		if(!(type in USER_TYPE)){
			errorMessage.message = "Invalid user type value"
			throw new Error()
		}

		const userIndex: number = users.findIndex(user=>user.id === id)
		if(userIndex > -1){
			errorMessage.message = "Id value already registered. Try another one."
			throw new Error()
		}

		const existingName: User | undefined = users.find(user=>user.name === name)
		if(existingName){
			errorMessage.message = "Name value already registered. Try another one."
			throw new Error()
		}

		const existingEmail: User | undefined = users.find(user=>user.email === email)
		if(existingEmail){
			errorMessage.message = "E-mail value already registered. Try another one."
			throw new Error()
		}

		const user: User = {
			id,
			name,
			email,
			age,
			type
		}

		users.push(user);
		res.status(200).send({message: "User created successfully"});
	}catch(error){
		res.status(errorCode).send(errorMessage);
	}
})

app.put("/users", (req: Request, res: Response): void=>{
	let errorCode = 400
	const errorMessage: ErrorMessage = {message:"Error updating users"}

	try{
		const {id, name} = req.body;

		if(!id || !name) {
			errorMessage.message = "Missing data for updating users"
			throw new Error()
		}

		const userIndex: number = users.findIndex(u=>u.id === id);
		if(userIndex === -1){
			errorMessage.message = "User not found"
			errorCode = 404
			throw new Error();
		}

		const existingName: User | undefined = users.find(user=>user.name === name)
		if(existingName){
			errorMessage.message = "Name value already registered. Try another one."
			throw new Error()
		}

		users[userIndex].name = `${name} - ALTERADO`;

		res.status(200).send({message: "User updated successfully"});
	}catch(error){
		res.status(errorCode).send(errorMessage);
	}
})

app.patch("/users", (req: Request, res: Response): void=>{
	let errorCode = 400
	const errorMessage: ErrorMessage = {message:"Error updating users"}

	try{
		const {id, name} = req.body;

		if(!id || !name) {
			errorMessage.message = "Missing data for updating users"
			throw new Error()
		}

		const userIndex: number = users.findIndex(u=>u.id === id);
		if(userIndex === -1){
			errorMessage.message = "User not found"
			errorCode = 404
			throw new Error();
		}

		const existingName: User | undefined = users.find(user=>user.name === name)
		if(existingName){
			errorMessage.message = "Name value already registered. Try another one."
			throw new Error()
		}

		if(!users[userIndex].name.includes("ALTERADO")){
			errorMessage.message = "User was not altered"
			throw new Error()
		}
		
		users[userIndex].name = `${name} - REALTERADO`;

		res.status(200).send({message: "User updated successfully"});
	}catch(error){
		res.status(errorCode).send(errorMessage);
	}
})

app.delete("/users/:id", (req: Request, res: Response)=>{
	let errorCode: number = 400
	const errorMessage: ErrorMessage = {message:"Error updating users"}
  
  try {
		const searchedId: number = Number(req.params.id)
		const userIndex: number = users.findIndex(user => user.id === searchedId)

    if(userIndex === -1) {
			errorCode = 404
			errorMessage.message = "User not found"
      throw new Error()
    }

    users.splice(userIndex, 1)

    res.status(200).send({message: "User deleted successfully"})
  } catch (error) {
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