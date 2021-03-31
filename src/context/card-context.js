import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import PropTypes from 'prop-types';

const { Provider, Consumer } = React.createContext({
  cards: [],
  isReadOnly: false,
  selectCardHandler: () => {},
  deleteCardHandler: () => {},
  addCardHandler: () => {},
  switchReadOnly: () => {},
});
const url =
  'https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json';
class CardsContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReadOnly: false,
      cards: [],
    };
  }

  componentDidMount() {
    axios.get(url).then(res => {
      this.setState({
        cards: res.data.slice(0, 15).map(pokemon => ({
          id: pokemon.Number,
          title: pokemon.Name,
          text: pokemon.About,
          selected: false,
        })),
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

CardsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export { CardsContextProvider, Consumer as CardContextConsumer };
