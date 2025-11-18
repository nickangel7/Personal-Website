import { NavLink } from 'react-router-dom';
import '../style.css';
import logo from './assets/honeybee.png';

const Header = () => {
  return (
    <header className='header'>
      <img src={logo} alt='Logo' className='logo' />
      <nav>
        <ul>
          <li>
            <NavLink to='/' end className='nav-link'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/portfolio' className='nav-link'>
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' className='nav-link'>
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact' className='nav-link'>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
