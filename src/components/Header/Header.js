import React from 'react';
import './Header.css';
import CardContext from '../../context/card-context';
import Navigation from '../Navigation';

const Header = () => {
  return (
    <div className="header">
      <Navigation className="nav" />

      <h1 className="title">Header</h1>

      <CardContext.Consumer>
        {({ cardsCount }) => (
          <div className="counter">
            Cards <span>{cardsCount}</span>
          </div>
        )}
      </CardContext.Consumer>
    </div>
  );
};

export default React.memo(Header);
