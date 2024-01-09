import './Dashboard.css';
import { useState } from "react"
import { User, UserRole } from "../../models/user";
import { getUsers, createUser } from "../../services/users";
import UserList from '../../components/UserList/UserList';
import { notify } from '../../services/notify';

export default function Dashboard() {
  const [users, setUsers] = useState<User[]>([]);
  const [showUsers, setShowUsers] = useState<boolean>(false);
  const token = localStorage.getItem('token');

  const listUsers = async () =>{
    if (token) {      
      const result = await getUsers(token);
      setUsers(result);
      setShowUsers(true)
    }
  }

  const addUser = async () =>{
    if (token) { 
      const newUser = {
        nombre: "jairo",
        apellido: "rivero",
        dni: "123456",
        email: "jairo@gmail.com",
        password: "0205",
        roles: UserRole.User
      } 

      const result = await createUser(newUser,token);
      setUsers([...users, result]);
    }
  }

  const removeUser = (userId:string)=>{  
    const filteredUsers = users.filter((user:User) => user._id !== userId);
    setUsers(filteredUsers);
    notify(`Usuario eliminado`);
  }

  return (
    <div className="dashboard">
      
      <section className="sidebar">
        <button type="button" onClick={listUsers}> Listar usuarios</button>
        <button type="button" onClick={addUser}> Crear usuario</button>        
      </section>

      <aside className='content'>       
        { showUsers && <UserList users={users} removeUser={removeUser}/> }    
      </aside>
    </div>
  )
}
