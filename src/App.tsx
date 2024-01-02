import './App.css'
import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AuthProvider} from './context/AuthContext.tsx';
import Layout from './components/Layout/Layout';
import Login from './pages/login/Login';
import Home from './pages/Home/Home';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Cart from './pages/Cart/Cart.tsx';
import Dashboard from './pages/Dashboard/Dashboard.tsx';

function App() {  
  const location = useLocation();

  useEffect(()=>{
    console.log('location >>> ', location);    
  },[location])
  
  return (   
    <>
      <div className='notifications'> 
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
      
      <AuthProvider >
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Home />} />
            <Route path="home"  element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App
