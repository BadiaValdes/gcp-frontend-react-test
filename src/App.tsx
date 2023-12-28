import './App.css'
import { useState } from 'react'
import { login } from './services/auth';

function App() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  // const user = {
  //   email: "prueba4@gmail.com",
  //   password: "1234"
  // }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log('form values >>>', form); 
    login(form);   
    setForm({  email: '', password: '' });
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


        { JSON.stringify(form) }
        
      </div>
    </>
  )
}

export default App
