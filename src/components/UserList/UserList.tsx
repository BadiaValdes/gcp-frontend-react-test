import './UserList.css';
import { EditIcon, RemoveIcon } from '../../utils/Icons/Icons';
import { User } from '../../models/user';

interface Props{
  users: User[];
  removeUser: (id:string) => void;
}

export default function UserList({ users, removeUser }:Props) {  

  return (
    <table className='table'>
      <thead>
        <tr>
          <th className='th th-left-corner p-1' scope="col">Nombre</th>
          <th className='th p-1' scope="col">Apellido</th>
          <th className='th p-1' scope="col">Correo</th>
          <th className='th th-right-corner p-1' scope="col">Acciones</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user) =>(
          <tr key={user._id} className='color'>
            <td scope="row" className='p-1'>{user.nombre}</td>
            <td scope="row" className='p-1'>{user.apellido}</td>
            <td scope="row" className='p-1'>{user.email}</td>
            <td scope="row" className='actions-td'>
              <button type="button" aria-label="edit user"> <EditIcon/> </button>
              <button type="button" onClick={()=>removeUser(user._id as string)} aria-label="remove user"> <RemoveIcon/> </button>
            </td>
          </tr> 
        ))}            
      </tbody>
    </table>        
  )
}
