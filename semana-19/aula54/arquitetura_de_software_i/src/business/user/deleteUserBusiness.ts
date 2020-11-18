import deleteUserData from "../../data/user/deleteUserData";
import { getTokenData } from "../../services/authenticator";
import { DeleteInput } from "../../types/types";

export default async function deleteUserBusiness (input: DeleteInput) {

  try {
      
    const verifiedToken = getTokenData(input.token);

    if(verifiedToken.role !== "ADMIN"){
      throw new Error("Apenas administradores podem deletar usuários!")
    }

    return await deleteUserData(input.id);
    
  } catch (error) {
    throw new Error(error.message);
  }

}