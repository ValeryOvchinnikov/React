import React from 'react';
import Card from './Card';
import './CardList.css';

const CardList = props => {
  const { cards, isReadOnly, checkedForDelete } = props;
  return cards.map(card => {
    return (
      <Card
        className="card"
        id={card.id}
        title={card.title}
        text={card.text}
        key={card.id}
        isReadOnly={isReadOnly}
        checkedForDelete={checkedForDelete}
      />
    );
  });
};

export default CardList;
