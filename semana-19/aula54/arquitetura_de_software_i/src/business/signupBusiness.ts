import insertUser from "../data/user/insertUser";
import { generateToken } from "../services/authenticator";
import { hash } from "../services/hashManager";
import { generateId } from "../services/idGenerator";
import { User, SignupInput } from "../types/types";

export default async function signupBusiness(user: SignupInput) {

  try{

    const {name, email, password, role} = user

    if(!name || !email || !password || !role){
      throw new Error("Please fill all the fields");
    }

    if(email.indexOf("@") === -1){
      throw new Error("Invalid Email");
    }

    if(password.length < 6){
      throw new Error("Password must have at least 6 characters");
    }

    const id = generateId();
    const hashPassword = await hash(password);

    const userData: User = {
      id,
      name,
      email,
      password: hashPassword,
      role
    }

    await insertUser(userData);

    const token = generateToken({id, role});
    
    return token;

  }catch(error){
    throw new Error(
      error.message || 
      "Error creating user. Please check your system administrator."
    );
  }

}