import './Dashboard.css';
import { getUsers, deleteUser } from "../../services/users";
import UserList from '../../components/UserList/UserList';
import useUsers from '../../hooks/useUsers';
import { useState } from 'react';
import EditUser from '../../components/EditUser/EditUser';
import {Modal} from '../../components/Modal/Modal';

export default function Dashboard() {
  const {users, listUsers, removeUser, totalUsers} = useUsers();
  const [showModal, setShowModal] = useState(false);
  const token = localStorage.getItem('token');
  const usersQty = totalUsers();

  const handleListUsers = async () =>{
    if (token) {      
      const result = await getUsers(token);
      listUsers(result);
    }
  }

  const handleRemoveUser = async (userId:string)=>{ 
    if (token) {  
      const {message} = await deleteUser(userId, token);
      console.log(message);      
      removeUser(userId);
    }
  }

  const closeModal =()=>{
    setShowModal(false);
  }

  return (
    <div className="dashboard">      
      <section className="sidebar">
        <button type="button" onClick={handleListUsers}> Listar usuarios</button>
        <button type="button" onClick={()=> setShowModal(prev => !prev)}> Crear usuario</button>  
        { usersQty > 0 && (<label>Total de usuarios: {usersQty} </label>) }      
      </section>

      <aside className='content'>       
        { usersQty > 0 && <UserList users={users} removeUser={handleRemoveUser}/> }
        <Modal isOpen={showModal} onClose={closeModal}>
          <EditUser/>
        </Modal>
      </aside>
    </div>
  )
}
