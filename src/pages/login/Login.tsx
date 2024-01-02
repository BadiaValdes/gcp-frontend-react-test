import { ChangeEvent, FormEvent, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../../services/auth";
import { useAuth} from '../../hooks/useAuth.tsx'


export default function Login() {
    const {signin} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

  // const user = {
  //   email: "prueba4@gmail.com",
  //   password: "1234"
  // }

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        console.log('form values >>>', form); 
        // login(form)
        // .then(result =>{
        //     console.log('api response >>>', result);
        //     if(result?.message === 'Login correcto') navigate(from, { replace: true }); 
        // });  
        signin(form); 
    }

    return (
        <>
        <h1 className='title'>Node + React + GCP</h1>
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
  
  
          {/* { JSON.stringify(form) } */}
          
        </div>
      </>
    )
}
