import React, { Component } from 'react';
import Card from './Card';
import './Cards.css';
class Cards extends Component {
    render() {
        return (
            <div className="cards">
                {this.props.cards.map(card => {
                    return (
                        <Card
                            className="card"
                            title={card.title}
                            text={card.text}
                            key={card.id}
                        />
                    );
                })}
            </div>
        );
    }
}
export default Cards;
