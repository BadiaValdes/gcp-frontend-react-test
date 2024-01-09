import './Dashboard.css';
import { useState } from "react"
import { User, UserRole } from "../../models/user";
import { getUsers, createUser } from "../../services/users";

export default function Dashboard() {
  const [users, setUsers] = useState<User[]>([]);
  const token = localStorage.getItem('token');

  const listUsers = async () =>{
    if (token) {      
      const result = await getUsers(token);
      setUsers(result);
    }
  }

  const addUser = async () =>{
    if (token) { 
      const newUser = {
        nombre: "jaila",
        apellido: "barreto",
        dni: "123456",
        email: "jaila@gmail.com",
        password: "0205",
        roles: UserRole.User
      } 

      const result = await createUser(newUser,token);
      setUsers([...users, result]);
    }
  }

  return (
    <div className="dashboard">
      
      <section className="sidebar">
        <button type="button" onClick={listUsers}> Listar usuarios</button>
        <button type="button" onClick={addUser}> Crear usuario</button>        
      </section>

      <aside className='content'>
        <ul>
          {users.length > 0 && users.map(user => (<li key={user._id}> {user.nombre} </li>))}
        </ul>
      </aside>
    </div>
  )
}
