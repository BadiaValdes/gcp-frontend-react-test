import { User } from './../models/user';

export type UserAction = 
    | {type: 'listUser', payload: User[]}
    | {type: 'addUser', payload: User}
    | {type: 'removeUser', payload: string}


export const usersInitialState:User[] = [];

export const usersReducer = (state: User[], action:UserAction) => {
    const {type}= action;

    if (type === "listUser"){
        return action.payload;
    }
    if (type === "addUser"){
        return [...state, action.payload];
    }
    if (type === "removeUser"){
        const filteredUsers = state.filter((user) => user._id !== action.payload)
        return filteredUsers;
    }

    return state;
}