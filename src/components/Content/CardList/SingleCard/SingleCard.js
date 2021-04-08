import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import './SingleCard.css';

const SingleCard = ({ match }) => {
  const { id } = match.params;
  const card = useSelector(state => state.cards.find(c => c.id === id));
  if (!card) {
    return <p>Card not found</p>;
  }
  return (
    <Card
      id={card.id}
      title={card.title}
      text={card.text}
      selected={card.selected}
      byId
    />
  );
};

SingleCard.propTypes = {
  match: PropTypes.object,
};

export default SingleCard;
