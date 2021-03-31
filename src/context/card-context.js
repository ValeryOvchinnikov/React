import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const { Provider, Consumer } = React.createContext({
  cards: [],
  isReadOnly: false,
  selectCardHandler: () => {},
  deleteCardHandler: () => {},
  addCardHandler: () => {},
  switchReadOnly: () => {},
});

class CardsContextProvider extends Component {
  url =
    'https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json';

  constructor(props) {
    super(props);
    this.state = {
      isReadOnly: false,
      cards: [],
    };
  }

  componentDidMount() {
    axios.get(this.url).then(res => {
      this.setState({
        cards: res.data.slice(0, 15).map(pokemon => {
          return { id: pokemon.Number, title: pokemon.Name, text: pokemon.About };
        }),
      });
    });
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
    const { cards, isReadOnly, error } = this.state;
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
          error,
        }}
      >
        {children}
      </Provider>
    );
  }
}
export { CardsContextProvider, Consumer as CardContextConsumer };
