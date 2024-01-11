import './EditUser.css';
import { User, UserRole } from '../../models/user';
import useUsers from '../../hooks/useUsers';
import { createUser } from '../../services/users';
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
    nombre: string
    apellido:string,
    email: string,
    dni: string,
    roles: UserRole.User,
    password: string,
}

export default function EditUser() {
    const {register, handleSubmit, formState: { errors, isValid }, reset} = useForm<Inputs>({
        defaultValues:{
            nombre:'',
            apellido:'',
            email: '',
            dni: '',
            roles: UserRole.User,
            password: '',
        }
    });
    const {addUser} = useUsers();
    const token = localStorage.getItem('token');

    const handleAddUser = async (user:User) =>{
        if (token && isValid) { 
            const {message} = await createUser(user,token);
            console.log(message);      
            addUser(user);
            handleReset();
        }
    }

    const onSubmit:SubmitHandler<Inputs> = (data) => {
        console.log('form values', data);
        handleAddUser(data);
    }

    const handleReset = () => {
        reset({
            nombre:'',
            apellido:'',
            email: '',
            dni: '',
            roles: UserRole.User,
            password: '',
        });
    }

  return (
    <>
        <form className='edit-form' onSubmit={handleSubmit(onSubmit)} >
            {/* <h2 className='title form-title'> Usuario </h2> */}
            <div className="form-section">
                <div className="form-field">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nombre"
                        placeholder="Insert su nombre"
                        aria-describedby="nombre"
                        {...register('nombre', {
                            required: { value: true, message: 'Campo Requerido'},
                            minLength: { value: 3, message: 'Mínimo 3 caracteres'},
                        })}
                    />
                    {errors?.nombre && (<span className="alert danger"> {errors.nombre.message} </span>)}                    
                </div>

                <div className="form-field">
                    <label htmlFor="apellido" className="form-label">Apellido</label>
                    <input
                        type="text"
                        className="form-control"
                        id="apellido"
                        placeholder="Inserte su apellido"
                        aria-describedby="apellido"
                        {...register('apellido', {
                            required:  { value: true, message: 'Campo Requerido'},
                            minLength: { value: 3, message: 'Mínimo 3 caracteres'},
                        })}
                    />
                    {errors?.apellido && (<span className="alert danger"> {errors.apellido.message} </span>)}
                </div>
            </div>

            <div className="form-section">
                <div className="form-field">
                    <label htmlFor="email" className="form-label">Correo</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="email"
                        placeholder="Inserte su email"
                        {...register('email', {
                            required:  { value: true, message: 'Campo Requerido'},
                            pattern: { value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'Correo inválido'},
                        })}
                    />
                    {errors?.email && (<span className="alert danger"> {errors.email.message} </span>)}
                </div>

                <div className="form-field">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        aria-describedby="password"
                        placeholder="Inserte su password"
                        {...register('password', {
                            required: { value: true, message: 'Campo Requerido'},
                            minLength: { value: 3, message: 'Mínimo 3 caracteres'},
                        })}
                    />
                    {errors?.password && (<span className="alert danger"> {errors.password.message} </span>)}
                </div>
            </div>

            <div className="form-section">
                <div className="form-field">
                <label htmlFor="dni" className="form-label">DNI</label>
                <input
                    type="number"
                    className="form-control"
                    id="dni"
                    aria-describedby="dni"
                    placeholder="Inserte su DNI"
                    {...register('dni', {
                        required: { value: true, message: 'Campo Requerido'},
                        minLength:{ value: 6, message: 'Mínimo 6 caracteres'},
                    })}
                />
                {errors?.dni && (<span className="alert danger"> {errors.dni.message} </span>)}  
                </div>

                <div className="form-field sel">
                    <label htmlFor="roles" className="form-label">Roles</label>              
                    <select
                        className="form-select form-select-lg form-control"
                        id="roles"
                        aria-describedby="user rol"
                        {...register('roles', {
                            required: { value: true, message: 'Campo Requerido'},
                        })}
                    >                        
                        <option disabled selected>Seleccione un rol</option>
                        <option value={UserRole.Admin}> Admin</option>
                        <option value={UserRole.User}>  User</option>                    
                    </select>
                    {errors?.roles && (<span className="alert danger"> {errors.roles.message} </span>)}   
                </div>
            </div>

            <div className="btn-field flex">
                <button type='submit'>  Aceptar</button>
                {/* <button type='submit' disabled={!isValid}>  Aceptar</button> */}
                <button type='button' onClick ={handleReset}>Reset</button>
            </div>
        </form>
    </>
  )
}
