import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Card from './Card';
import './CardList.css';

const CardList = ({ cards }) => {
  const history = useHistory();
  const openCard = id => {
    history.push(`/card/${id}`);
  };
  return cards.map(card => {
    return (
      <Card
        key={card.id.toString()}
        className="card"
        id={card.id}
        title={card.title}
        text={card.text}
        selected={card.selected}
        dblClick={() => openCard(card.id)}
      />
    );
  });
};

const mapStateToProps = state => ({
  cards: state.cards,
});
export default connect(mapStateToProps, null)(CardList);
