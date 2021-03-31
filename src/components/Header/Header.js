import React from 'react';
import './Header.css';
import { CardContextConsumer } from '../../context/card-context';

const Header = () => (
  <div className="header">
    <h1 className="title">Header</h1>
    <CardContextConsumer>
      {({ cardsCount }) => (
        <div className="counter">
          Cards <span className="badge badge-light">{cardsCount}</span>
        </div>
      )}
    </CardContextConsumer>
  </div>
);

export default Header;
