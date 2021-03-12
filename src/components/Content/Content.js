import React, { Component } from 'react';
import { StyledDiv, StyledButton, StyledCheckbox } from './Controls';
import CardList from './CardList';
import './Content.css';

const indexToDelete = [];

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReadOnly: false,
      cards: [
        { id: 0, title: 'Card 1', text: 'text' },
        { id: 1, title: 'Card 2', text: 'text' },
        { id: 2, title: 'Card 3', text: 'text' },
        { id: 3, title: 'Card 4', text: 'text' },
        { id: 4, title: 'Card 5', text: 'text' },
        { id: 5, title: 'Card 6', text: 'text' },
        { id: 6, title: 'Card 7', text: 'text' },
      ],
    };
  }

  addOrDeleteIndex = item => {
    const index = indexToDelete.indexOf(item);
    index !== -1 ? indexToDelete.splice(index, 1) : indexToDelete.push(item);
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
  };

  render() {
    const { isReadOnly, cards } = this.state;
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

        <CardList
          isReadOnly={isReadOnly}
          cards={cards}
          checkedForDelete={this.addOrDeleteIndex}
        />
      </>
    );
  }
}
