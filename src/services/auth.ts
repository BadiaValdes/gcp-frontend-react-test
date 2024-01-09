
import { apiUrl } from "../utils/constants";

export const login = async (data) =>{
  try {
    const res = await fetch(`${apiUrl}/login`, 
      {
        method: 'POST',
        body: JSON.stringify(data), 
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    const result = await res.json();
    const {usuario,token} = result; 
    window.localStorage.setItem('token', token);
    window.localStorage.setItem('user', JSON.stringify(usuario));
    return result;
  } catch (error) {
    console.error(error);  
  }  
}