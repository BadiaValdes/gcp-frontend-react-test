import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth} from '../../hooks/useAuth.tsx'
import './Login.css';
import { notify } from "../../services/notify.ts";

export default function Login() {
    const {user,signin} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    useEffect(()=>{
      if(user && location.pathname === '/login'){
        notify('Usted ya está logueado!');
        navigate("..", { relative: "path" });
      }
    },[user])

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        signin(form); 
    }

    return (
        <>        
        <div className="card">
  
          <form className='login-form' onSubmit={handleSubmit}>
            <h2 className='title form-title'>Login</h2>
            <div className="form-field">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                placeholder="insert email"
                aria-describedby="email"
                onChange={handleChange}
              />
              <small id="email" className="" hidden>Help text</small>
            </div>
  
            <div className="form-field">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                id="password"
                aria-describedby="password"
                placeholder="insert password"
                onChange={handleChange}
              />
              <small id="password" className="" hidden>Help text</small>
            </div>
  
            <div className="btn-field">
              <button type='submit' className='btn-full'>Sigin</button>
            </div>
          </form>          
        </div>
      </>
    )
}
