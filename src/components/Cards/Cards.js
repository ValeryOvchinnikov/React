import React, { Component } from 'react';
import styled from 'styled-components';
import Card from './Card';
import './Cards.css';

const StyledCheckbox = styled.input`
    transform: ${props => (props.checked ? 'scale(1)' : 'scale(2)')};

    margin: 9px;
    }
`;

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            readOnly: false,
        };
    }

    switchReadOnly = () => {
        this.setState({
            readOnly: !this.state.readOnly,
        });
    };

    render() {
        return (
            <>
                <StyledCheckbox
                    id="read-only"
                    type="checkbox"
                    checked={this.state.readOnly}
                    onChange={this.switchReadOnly}
                />
                <label htmlFor="read-only">Read-Only</label>

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
