import './EditUser.css';
import { NewUser, User, UserRole } from '../../models/user';
import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import useUsers from '../../hooks/useUsers';
import { createUser } from '../../services/users';


export default function EditUser() {
    const {addUser} = useUsers();
    const [form, setForm] = useState<NewUser>({
        nombre:'',
        apellido:'',
        email: '',
        dni: '',
        roles: UserRole.User,
        password: '',
    });
    const token = localStorage.getItem('token');
    const formRef = useRef<HTMLFormElement>(null);

    const handleAddUser = async (user:User) =>{
        if (token) { 
          const {message} = await createUser(user,token);
          console.log(message);      
          addUser(user);
        }
      }

    const handleChange = (e:ChangeEvent<HTMLInputElement | HTMLSelectElement> ) => {
        setForm({ ...form, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        console.log('form values', form);
        handleAddUser(form);
        reset();
    }

    const reset = () => {
        setForm({
            nombre:'',
            apellido:'',
            email: '',
            dni: '',
            roles: UserRole.User,
            password: '',
        });

        if (formRef.current) {
            formRef.current.reset();
        }
    }

  return (
    <>        
        <form className='login-form' onSubmit={handleSubmit} ref={formRef}>
            <h2 className='title form-title'> Usuario </h2>

            <div className="form-field">
              <label htmlFor="nombre" className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                name="nombre"
                id="nombre"
                placeholder="Insert su nombre"
                aria-describedby="nombre"
                onChange={handleChange}
              />
              <small id="_firstName" className="" hidden>Help text</small>
            </div>

            <div className="form-field">
              <label htmlFor="apellido" className="form-label">Apellido</label>
              <input
                type="text"
                className="form-control"
                name="apellido"
                id="apellido"
                placeholder="Inserte su apellido"
                aria-describedby="apellido"
                onChange={handleChange}
              />
              <small id="_lastName" className="" hidden>Help text</small>
            </div>
  
            <div className="form-field">
              <label htmlFor="email" className="form-label">Correo</label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                aria-describedby="email"
                placeholder="Inserte su email"
                onChange={handleChange}
              />
              <small id="_email" className="" hidden>Help text</small>
            </div>

            <div className="form-field">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input
                type="text"
                className="form-control"
                name="password"
                id="password"
                aria-describedby="password"
                placeholder="Inserte su password"
                onChange={handleChange}
              />
              <small id="_password" className="" hidden>Help text</small>
            </div>

            <div className="form-field">
              <label htmlFor="dni" className="form-label">DNI</label>
              <input
                type="number"
                className="form-control"
                name="dni"
                id="dni"
                aria-describedby="dni"
                placeholder="Inserte su DNI"
                onChange={handleChange}
              />
              <small id="_dni" className="" hidden>Help text</small>
            </div>

            <div className="form-field">
                <label htmlFor="roles" className="form-label">Roles</label>              
                <select
                    className="form-select form-select-lg form-control"
                    name="roles"
                    id="roles"
                    aria-describedby="user rol"
                    onChange={handleChange}
                >
                    <option disabled selected>Seleccione un rol</option>
                    <option value={UserRole.Admin}> Admin</option>
                    <option value={UserRole.User}>  User</option>                    
                </select>
              <small id="_roles" className="" hidden>Help text</small>
            </div>
  
            <div className="btn-field">
              <button type='submit' className='btn-full'>Aceptar</button>
            </div>
        </form>
    </>
  )
}
