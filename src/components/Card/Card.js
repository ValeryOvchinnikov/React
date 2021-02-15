import React, { useState } from 'react';
import './Card.css';

const Card = props => {
    const [isChecked, setChecked] = useState(false);
    const switchColor = () => setChecked(!isChecked);
    return (
        <div
            style={{ backgroundColor: isChecked ? '#5E4BD8' : '#2C17B1' }}
            className="card"
        >
            <>
                <h4 className="cardTitle">{props.title}</h4>
                <input
                    className="cardInput"
                    type="checkbox"
                    onClick={switchColor}
                />
            </>
            <hr className="cardLine" />
            <p>{props.text}</p>
        </div>
    );
};

export default Card;
