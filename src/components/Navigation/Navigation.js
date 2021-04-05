import React from 'react';
import NavItem from './NavItem';
import './Navigation.css';

const Navigation = () => (
  <ul className="nav">
    <li className="nav-item">
      <NavItem link="/">Home</NavItem>
    </li>
    <li className="nav-item">
      <NavItem link="/sign-in">Sign In</NavItem>
    </li>
  </ul>
);
export default React.memo(Navigation);
