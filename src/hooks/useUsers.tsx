import { useReducer } from "react";
import { usersReducer, usersInitialState } from "../reducers/users.reducer";
import { User } from "../models/user";


export default function useUsers() {
    const [state, dispatch] = useReducer(usersReducer, usersInitialState);

    const listUsers  = (users:User[])  => dispatch({type: 'listUser',   payload:users});
    const addUser    = (newUser:User)  => dispatch({type: "addUser",    payload:newUser})
    const removeUser = (userId:string) => dispatch({type: "removeUser", payload:userId})
    const totalUsers = () => state.length;
    
    return {
        users:state,
        listUsers,
        addUser,
        removeUser,
        totalUsers
    }
}
