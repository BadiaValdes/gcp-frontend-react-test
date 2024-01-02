import { Link } from 'react-router-dom';
import './Header.css';
import { useAuth } from '../../../hooks/useAuth';

export default function Header() {
    const {user,signout} = useAuth();
  return (
    <header className='header'>
        <h1 className='title logo'>LOGO</h1>
        <div className="spacer"></div>
        <nav className='navigation'>
            <ul>
                <li>
                    <Link to='home'>Home</Link>
                </li>
                <li>
                    <Link to='login'>Login</Link>
                </li>
            </ul>
        </nav>
        <div className="spacer"></div>
        <div className='actions'>            
            {user && (<button className='logout' onClick={signout}>Logout</button>)}
        </div>
    </header>
  )
}
