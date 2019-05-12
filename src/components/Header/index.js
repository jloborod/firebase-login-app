import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className='Header'>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/login/">Login</Link>
      </li>
    </ul>
  </nav>
);

export default Header;
