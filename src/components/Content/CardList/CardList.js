import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import './CardList.css';

const CardList = ({ dblClick, cards }) =>
  cards.map(card => {
    return (
      <Card
        key={card.id.toString()}
        className="card"
        id={card.id}
        title={card.title}
        text={card.text}
        selected={card.selected}
        dblClick={() => dblClick(card.id)}
      />
    );
  });

const mapStateToProps = state => ({
  cards: state.cards,
});
export default connect(mapStateToProps, null)(CardList);
