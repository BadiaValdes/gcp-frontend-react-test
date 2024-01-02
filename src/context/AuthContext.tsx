import { FC, createContext, useState } from "react";
import { notify} from '../services/notify.ts';
import { login } from "../services/auth.ts";
import { useLocation, useNavigate } from "react-router-dom";
import { LoginData } from "../models/login-data.ts";
import { ChildrenProp } from "../models/types.ts";

export interface AuthContextType {
  user: User | null;
  signin: (data:LoginData) => void;
  signout: () => void;
}

export interface User{
  email: string;
  nombre: string;
  apellido: string;
  roles: string;
  dni: string;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider:FC<ChildrenProp> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const signin = (data:LoginData):void => {    
    login(data)
      .then(result =>{
        console.log('api response >>>', result);
        const {usuario} = result;
        setUser(usuario);
        if(result?.message === 'Login correcto') {
          notify('login!');                
          navigate(from, { replace: true })
        }
      });
  };

  const signout = ():void => {
    setUser(null);
    window.localStorage.removeItem('token');    
    window.localStorage.removeItem('user');    
    notify('logout!');      
  };  


  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  )
}

