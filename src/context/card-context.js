import React, { PureComponent } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import PropTypes from 'prop-types';

const CardContext = React.createContext({
  cards: [],
  isReadOnly: false,
  createCardHandler: () => {},
  selectCardHandler: () => {},
  updateCardHandler: () => {},
  deleteCardHandler: () => {},
  switchReadOnly: () => {},
});

const Url =
  'https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json';

export class CardContextProvider extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isReadOnly: false,
      cards: [],
    };
  }

  componentDidMount() {
    axios.get(Url).then(res => {
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

  createCardHandler = () => {
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

  updateCardHandler = (id, title, text) => {
    this.setState(prevState => {
      return {
        cards: prevState.cards.map(item =>
          item.id === id
            ? {
                ...item,
                title,
                text,
              }
            : item,
        ),
      };
    });
  };

  render() {
    const { cards, isReadOnly } = this.state;
    const { children } = this.props;
    return (
      <CardContext.Provider
        value={{
          cards,
          cardsCount: cards.length,
          isReadOnly,
          createCardHandler: this.createCardHandler,
          selectCardHandler: this.selectCardHandler,
          updateCardHandler: this.updateCardHandler,
          deleteCardHandler: this.deleteCardHandler,
          switchReadOnly: this.switchReadOnly,
        }}
      >
        {children}
      </CardContext.Provider>
    );
  }
}

CardContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardContext;
