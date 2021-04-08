import React from 'react';
import './Header.css';
import { useSelector } from 'react-redux';

import Navigation from '../Navigation';

const Header = () => {
  return (
    <div className="header">
      <Navigation className="nav" />

      <h1 className="title">Header</h1>

      <div className="counter">
        Cards <span>{useSelector(state => state.cards.length)}</span>
      </div>
    </div>
  );
};

export default React.memo(Header);
