import getAllUsersData from "../../data/user/getAllUsersData";
import { getTokenData } from "../../services/authenticator";

export default async function getAllUsersBusiness (token: string) {

  try {

    getTokenData(token);
  
    return await getAllUsersData();
    
  } catch (error) {
    throw new Error(error.message);
  }

}