import axios from "axios";

const URL_ADDRESS = "https://viacep.com.br/ws"

export type Address = {
  logradouro: string,
  bairro: string,
  cidade: string,
  estado: string
}

export async function getAddressInfo(cep: number): Promise<Address>{
  
  const result = await axios.get(`${URL_ADDRESS}/${cep}/json`);

  return {
    logradouro: result.data.logradouro,
    bairro: result.data.bairro,
    cidade: result.data.cidade,
    estado: result.data.uf
  }

}