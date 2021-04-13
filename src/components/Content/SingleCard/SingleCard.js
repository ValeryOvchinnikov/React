import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../CardList/Card';

const SingleCard = ({ match }) => {
  const { id } = match.params;
  const findCard = state => state.cards.find(c => c.id === id);
  const card = useSelector(findCard);
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
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

export default SingleCard;
