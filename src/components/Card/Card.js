import React from 'react';
import './Card.css';

const Card = (props) => (
    <div className="card">
        <h4 className="cardTitle">{props.title}</h4>
        <hr className="cardLine" />
        <p>{props.text}</p>
    </div>
);

export default Card;
