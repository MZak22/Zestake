import { Link } from 'react-router-dom'
import './Topmenu.css'

interface TopmenuProps {
  view: 'home' | 'login' | 'register';
  setView: (val: 'home' | 'login' | 'register') => void;
}

export default function Topmenu() {
  return (
    <div className='menu'>
        <nav className="topmenu">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <h2>Zestake</h2>
        </nav>
        
    </div>
  );
}
