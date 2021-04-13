import React from 'react';
import './Header.css';
import { useSelector } from 'react-redux';

import Navigation from '../Navigation';

const Header = () => {
  const counter = state => state.cards.cards.length;
  const getUserName = state => state.auth.currentUser.authData.username;
  const userName = useSelector(getUserName);
  return (
    <div className="header">
      <Navigation className="nav" />

      <h1 className="title">Welcome {userName}</h1>

      <div className="counter">
        Cards <span>{useSelector(counter)}</span>
      </div>
    </div>
  );
};

export default Header;
