import './Header.css';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';

import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";

export default function Header() {
    const {user,signout} = useAuth();
    const location = useLocation();
    const NavClassName = ({isActive})=> ['navlink', isActive ? 'active' : ''].join(' ');

  return (
    <header className='header'>
        <h1 className='title logo'>LOGO</h1>
        {/* <p>{JSON.stringify(user?.roles)}</p> */}

        <div className="section-right">
            <nav className='navigation'>
                <NavLink to='home' className={NavClassName}  > Home  </NavLink>   
            </nav>

            <div className='actions'> 
                <div className="cart">
                <Link to='cart' aria-label="Cart" data-balloon-pos="down"> <CiShoppingCart className='icon' /> </Link>
                </div>
                <div className="user">
                    {user?.roles === 'admin' && (
                        <button className='btn-icon' aria-label="User actions" data-balloon-pos="down"> 
                            <CiUser className='icon' />
                        </button>
                    )}
                    {user 
                        ? (<button className='btn-icon' onClick={signout} aria-label="Logout"  data-balloon-pos="down">   <CiLogout className='icon'/> </button>)
                        : location.pathname !== '/login' && (<Link to='login' aria-label="Login" data-balloon-pos="down"> <CiLogin className='icon'/> </Link>)
                    }
                </div>  
                        
            </div>
        </div>
    </header>
  )
}