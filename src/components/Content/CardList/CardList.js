import React from 'react';
import Card from './Card';
import './CardList.css';

const CardList = props => {
  const { cards, isReadOnly, checkedForDelete } = props;
  return (
    <div className="card-list">
      {cards.map(card => (
        <Card
          className="card"
          id={card.id}
          title={card.title}
          text={card.text}
          key={card.id}
          isReadOnly={isReadOnly}
          checkedForDelete={checkedForDelete}
        />
      ))}
    </div>
  );
};

export default CardList;
