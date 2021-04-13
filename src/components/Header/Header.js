import React from 'react';
import './Header.css';
import { useSelector } from 'react-redux';

import Navigation from '../Navigation';

const Header = () => {
  const counter = state => state.cards.length;
  return (
    <div className="header">
      <Navigation className="nav" />

      <h1 className="title">Header</h1>

      <div className="counter">
        Cards <span>{useSelector(counter)}</span>
      </div>
    </div>
  );
};

export default Header;
