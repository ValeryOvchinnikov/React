import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

const { Provider, Consumer } = React.createContext({
  cards: [],
  isReadOnly: false,
  selectCardHandler: () => {},
  deleteCardHandler: () => {},
  addCardHandler: () => {},
  switchReadOnly: () => {},
});

class CardsContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReadOnly: false,
      cards: [
        { id: '0', title: 'Card 1', text: 'text', selected: false },
        { id: '1', title: 'Card 2', text: 'text', selected: false },
        { id: '2', title: 'Card 3', text: 'text', selected: false },
        { id: '3', title: 'Card 4', text: 'text', selected: false },
        { id: '4', title: 'Card 5', text: 'text', selected: false },
        { id: '5', title: 'Card 6', text: 'text', selected: false },
        { id: '6', title: 'Card 7', text: 'text', selected: false },
      ],
    };
  }

  switchReadOnly = () => {
    this.setState(prevState => ({
      isReadOnly: !prevState.isReadOnly,
    }));
  };

  deleteCardHandler = () => {
    this.setState(prevState => ({
      cards: prevState.cards.filter(card => !card.selected),
    }));
  };

  selectCardHandler = id => {
    this.setState(prevState => {
      return {
        cards: prevState.cards.map(item =>
          item.id === id ? { ...item, selected: !item.selected } : item,
        ),
      };
    });
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

  render() {
    const { cards, isReadOnly } = this.state;
    const { children } = this.props;
    return (
      <Provider
        value={{
          cards,
          cardsCount: cards.length,
          isReadOnly,
          selectCardHandler: this.selectCardHandler,
          deleteCardHandler: this.deleteCardHandler,
          addCardHandler: this.addCardHandler,
          switchReadOnly: this.switchReadOnly,
        }}
      >
        {children}
      </Provider>
    );
  }
}
export { CardsContextProvider, Consumer as CardContextConsumer };
