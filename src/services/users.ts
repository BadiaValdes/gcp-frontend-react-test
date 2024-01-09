import axios from "axios";
import { apiUrl } from "../utils/constants";
import { User } from "../models/user";

export const  getUsers = async (token:string)=> {
      try {
            const {data} = await axios.get(`${apiUrl}/users`,{ headers: { 'Authorization': `Bearer ${token}`}});
            return data;
      } catch (error) {
            console.error(error);
      }
}

export const createUser = async (user: User,token:string)=> {
      try {
            const {data} = await axios.post(`${apiUrl}/users`, user, { headers: { 'Authorization': `Bearer ${token}`}});
            return data;
      } catch (error) {
            console.error(error);
      }
}