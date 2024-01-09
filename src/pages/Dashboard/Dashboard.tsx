import './Dashboard.css';
import { UserRole } from "../../models/user";
import { getUsers, createUser } from "../../services/users";
import { notify } from '../../services/notify';
import UserList from '../../components/UserList/UserList';
import useUsers from '../../hooks/useUsers';

export default function Dashboard() {
  const {users, listUsers, addUser, removeUser, totalUsers} = useUsers();
  const token = localStorage.getItem('token');
  const usersQty = totalUsers();

  const handleListUsers = async () =>{
    if (token) {      
      const result = await getUsers(token);
      listUsers(result);
    }
  }

  const handleAddUser = async () =>{
    if (token) { 
      const newUser = {
        nombre: "humbe",
        apellido: "valle",
        dni: "123456",
        email: "humbe@gmail.com",
        password: "humbe",
        roles: UserRole.User
      } 

      const {message} = await createUser(newUser,token);
      console.log(message);      
      addUser(newUser);
    }
  }

  const handleRemoveUser = (userId:string)=>{  
    removeUser(userId);
    notify(`Usuario eliminado`);
  }

  return (
    <div className="dashboard">      
      <section className="sidebar">
        <button type="button" onClick={handleListUsers}> Listar usuarios</button>
        <button type="button" onClick={handleAddUser}> Crear usuario</button>  
        { usersQty > 0 && (<label>Total de usuarios: {usersQty} </label>) }      
      </section>

      <aside className='content'>       
        { usersQty > 0 && <UserList users={users} removeUser={handleRemoveUser}/> }    
      </aside>
    </div>
  )
}
