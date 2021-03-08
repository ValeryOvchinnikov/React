import React, { Component } from 'react';
import styled from 'styled-components';
import Card from './Card';
import './Cards.css';

const StyledCheckbox = styled.input`
    transform: ${props => (props.checked ? 'scale(1)' : 'scale(2)')};
    margin: 9px;
    }
`;

export default class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isReadOnly: false,
        };
        this.switchReadOnly = this.switchReadOnly.bind(this);
    }

    switchReadOnly = () => {
        this.setState(prevState => ({
            isReadOnly: !prevState.isReadOnly,
        }));
    };

    render() {
        const { isReadOnly } = this.state;
        return (
            <>
                <StyledCheckbox
                    id="read-only"
                    type="checkbox"
                    checked={isReadOnly}
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
                            isReadOnly={isReadOnly}
                        />
                    ))}
                </div>
            </>
        );
    }
}
