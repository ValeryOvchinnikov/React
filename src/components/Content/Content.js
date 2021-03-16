import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { StyledDiv, StyledButton, StyledCheckbox } from './Controls';
import CardList from './CardList';
import './Content.css';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReadOnly: false,
      cards: [
        { id: 0, title: 'Card 1', text: 'text', selected: false },
        { id: 1, title: 'Card 2', text: 'text', selected: false },
        { id: 2, title: 'Card 3', text: 'text', selected: false },
        { id: 3, title: 'Card 4', text: 'text', selected: false },
        { id: 4, title: 'Card 5', text: 'text', selected: false },
        { id: 5, title: 'Card 6', text: 'text', selected: false },
        { id: 6, title: 'Card 7', text: 'text', selected: false },
      ],
    };
  }

  selectCardHandler = id => {
    this.setState(prevState => {
      return {
        cards: prevState.cards.map(item =>
          item.id === id ? { ...item, selected: !item.selected } : item,
        ),
      };
    });
  };

  switchReadOnly = () => {
    this.setState(prevState => ({
      isReadOnly: !prevState.isReadOnly,
    }));
  };

  addCardHandler = () => {
    this.setState(prevState => ({
      cards: [
        ...prevState.cards,
        {
          id: uuidv4(),
          title: '',
          text: '',
          selected: false,
        },
      ],
    }));
  };

  deleteHandler = () => {
    this.setState(prevState => ({
      cards: prevState.cards.filter(card => !card.selected),
    }));
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
          <StyledButton onClick={this.addCardHandler}>Create new card</StyledButton>
        </StyledDiv>

        <div className="card-list">
          <CardList
            isReadOnly={isReadOnly}
            cards={cards}
            checkedForDelete={this.selectCardHandler}
          />
        </div>
      </>
    );
  }
}
