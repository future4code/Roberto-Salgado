import express, { Express, Request, Response } from "express";
import cors from "cors";
import { countries, country } from "./countries";
import { AddressInfo } from "net";

const app: Express = express();

app.use(express.json());
app.use(cors());

app.get("/countries/all", (req: Request, res: Response)=>{
  type GetCountryByIdOutput = {
    id: number,
    name: string
  }

  const result: GetCountryByIdOutput[] = countries.map(country => ({
    id: country.id,
    name: country.name
  }))

  res.status(200).send(result);
})

app.get("/countries/search", (req: Request, res: Response)=>{
  let result: country[] = countries

  if (req.query.name) {
    result = result.filter(
        country => country.name.toLocaleLowerCase().includes(String(req.query.name).toLowerCase())
    )
  }

  if (req.query.capital) {
    result = result.filter(
        country => country.capital.toLocaleLowerCase().includes(String(req.query.capital).toLowerCase())
    )
  }

  if (req.query.continent) {
    result = result.filter(
        country => country.continent.toLocaleLowerCase().includes(String(req.query.continent).toLowerCase())
    )
  }

  if(result.length >= 1) {
    res.status(200).send(result)
  } else {
    res.status(404).send("Not found")
  }
})

app.get("/countries/:id", (req: Request, res: Response)=>{
  const result: country | undefined = countries.find(
    country => country.id === Number(req.params.id)
  )

  if(result) {
    res.status(200).send(result)
  } else {
    res.status(404).send("Not found")
  }
})

app.put("/countries/edit/:id", (req: Request, res: Response)=>{
  let errorCode: number = 401

  try {
    if(!req.headers.authorization){
      throw new Error()
    }
    if(Object.keys(req.params.id).length === 0 || Object.keys(req.body).length === 0){
      errorCode = 400
      throw new Error()
    }

    const result: country | undefined = countries.find(
      country => country.id === Number(req.params.id)
    )

    if(!result){
      errorCode = 404
      throw new Error()
    }

    result.capital = req.body.capital
    result.name = req.body.name

    res.status(200).end()

  } catch(error) {
    res.status(errorCode).end()
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