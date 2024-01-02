import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

export default function Header() {
    const {user,signout} = useAuth();

    const NavClassName = ({isActive})=> ['navlink', isActive ? 'active' : ''].join(' ');

  return (
    <header className='header'>
        <h1 className='title logo'>LOGO</h1>
        <p>{JSON.stringify(user?.roles)}</p>

        <div className="section-right">
            <nav className='navigation'>
                <NavLink to='home' className={NavClassName}  > Home  </NavLink>   
            </nav>

            <div className='actions'> 
                <div className="cart">
                    <CiShoppingCart className='icon'/>
                </div>
                <div className="user">
                    {user?.roles === 'admin' && (<CiUser className='icon'/>)}
                    {user 
                        ? (<button className='logout' onClick={signout}>Logout</button>)
                        : (<Link to='login'>Login</Link>)
                    }
                </div>  
                        
            </div>
        </div>
    </header>
  )
}