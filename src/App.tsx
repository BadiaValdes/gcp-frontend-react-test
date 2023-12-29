import './App.css'
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Login from './pages/login/Login';
import Home from './pages/Home/Home';

function App() {  
  
  return (    
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<Home />} />
        <Route path="home"  element={<Home />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  )
}

export default App
