import React, { Component } from 'react';
import styled from 'styled-components';
import Card from './Card';
import './Cards.css';

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
`;

const StyledCheckbox = styled.input`
    transform: ${props => (props.checked ? 'scale(1)' : 'scale(2)')};
    margin:10px;  
}
`;

const StyledButton = styled.button`
    font: inherit;
    margin: 10px;
    height: 50px;
    width: 125px;
    min-width: 117px;
    background-color: #5e4bd8;
    border-radius: 7px;

    color: white;
    &&:hover {
        background: #3a2e85;
    }
    &&:focus {
        outline: none;
    }
`;
const indexToDelete = [];

export default class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isReadOnly: false,
            cards: this.props.cards,
        };
        this.switchReadOnly = this.switchReadOnly.bind(this);
        this.deleteHandler = this.deleteHandler.bind(this);
    }

    addOrDeleteIndex = item => {
        const index = indexToDelete.indexOf(item);
        index !== -1 ? indexToDelete.splice(index, 1) : indexToDelete.push(item);

        console.log(`to delete ${indexToDelete}`);
    };

    switchReadOnly = () => {
        this.setState(prevState => ({
            isReadOnly: !prevState.isReadOnly,
        }));
    };

    deleteHandler = () => {
        const { cards } = this.state;

        const newCards = cards.filter(item => indexToDelete.indexOf(item.id) < 0);
        this.setState({
            cards: newCards,
        });
        indexToDelete.length = 0;
        console.log(`deleted ${newCards}`);
    };

    render() {
        const { isReadOnly } = this.state;
        return (
            <>
                <StyledDiv>
                    <StyledCheckbox
                        id="read-only"
                        type="checkbox"
                        checked={isReadOnly}
                        onChange={this.switchReadOnly}
                    />
                    <label htmlFor="read-only">Read-Only</label>

                    <StyledButton onClick={this.deleteHandler}>
                        Delete selected cards
                    </StyledButton>
                </StyledDiv>
                <div className="cards">
                    {this.state.cards.map(card => (
                        <Card
                            className="card"
                            id={card.id}
                            title={card.title}
                            text={card.text}
                            key={card.id}
                            isReadOnly={isReadOnly}
                            checkedForDelete={this.addOrDeleteIndex}
                        />
                    ))}
                </div>
            </>
        );
    }
}
