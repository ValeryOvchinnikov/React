import React, { Component } from 'react';
import Card from './Card';
import './Cards.css';
class Cards extends Component {
    state = {
        readOnly: false,
    };

    switchReadOnly = () => {
        this.setState({
            readOnly: !this.state.readOnly,
        });
    };
    render() {
        return (
            <>
                <input
                    id="readOnly"
                    type="checkbox"
                    onChange={this.switchReadOnly}
                    checked={this.state.readOnly}
                />
                <label htmlFor="readOnly">Read only</label>
                <div className="cards">
                    {this.props.cards.map(card => (
                        <Card
                            className="card"
                            title={card.title}
                            text={card.text}
                            key={card.id}
                            readOnly={this.state.readOnly}
                        />
                    ))}
                </div>
            </>
        );
    }
}
export default Cards;
