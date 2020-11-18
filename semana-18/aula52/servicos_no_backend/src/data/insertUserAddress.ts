import { connection } from "..";
import { Address } from "../services/getAddressInfo";

export default async function insertUserAddress(
   id: string,
   userAddress: Address,
   numero: number,
   complemento?: string
): Promise<void> {
  
  const {logradouro,bairro,cidade,estado} = userAddress;

  await connection("aula52_user_address")
    .insert({ logradouro, numero, complemento, bairro, cidade, estado })
    .where({ id });
}