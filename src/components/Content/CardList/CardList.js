import React from 'react';
import Card from './Card';
import './CardList.css';

const CardList = props => {
  const { cards } = props;
  return cards.map(card => {
    return (
      <Card
        className="card"
        id={card.id}
        title={card.title}
        text={card.text}
        selected={card.selected}
        key={card.id}
      />
    );
  });
};

export default React.memo(CardList);
