
import axios from "axios";
import { apiUrl } from "../utils/constants";
import { LoginData } from "../models/login-data";

export const login = async (userData:LoginData) =>{
  try {
    const {data} = await axios.post(`${apiUrl}/login`, userData );    
    const {usuario,token} = data; 
    window.localStorage.setItem('token', token);
    window.localStorage.setItem('user', JSON.stringify(usuario));
    return data;
  } catch (error) {
    console.error(error);  
  }  
}