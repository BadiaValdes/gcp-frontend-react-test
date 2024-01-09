import './Header.css';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { CartIcon, DashboardIcon, LoginIcon, LogoutIcon} from '../../utils/Icons/Icons';

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
                    <Link to='cart' aria-label="Carrito" data-balloon-pos="down"> <CartIcon /> </Link>
                </div>
                <div className="user">
                    {user?.roles === 'admin' && (
                        <Link to='dashboard' aria-label="Admin dashboard" data-balloon-pos="down"> 
                            <DashboardIcon />
                        </Link>
                    )}
                    {user 
                        ? (<button className='btn-icon' onClick={signout} aria-label="Cerrar sesión"  data-balloon-pos="down">   <LogoutIcon /> </button>)
                        : location.pathname !== '/login' && (<Link to='login' aria-label="Iniciar sesión" data-balloon-pos="down"> <LoginIcon /> </Link>)
                    }
                </div>  
                        
            </div>
        </div>
    </header>
  )
}