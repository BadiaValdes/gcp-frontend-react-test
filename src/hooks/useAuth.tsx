import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export function useAuth() {
    const authContext= useContext(AuthContext); //use context
    if(!authContext) throw new Error('AuthContext must be used within Provider!') //check if AuthContext exists
    return authContext;
}