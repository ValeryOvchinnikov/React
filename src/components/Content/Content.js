import React from 'react';
import PropTypes from 'prop-types';
import { StyledDiv, StyledButton } from './StyledComponent/Controls';
import CardList from './CardList';

import './Content.css';

const Content = ({ deleteCard, createCard, isReadOnly }) => {
  return (
    <>
      {!isReadOnly && (
        <StyledDiv>
          <StyledButton onClick={deleteCard}>Delete selected cards</StyledButton>
          <StyledButton onClick={createCard}>Create new card</StyledButton>
        </StyledDiv>
      )}

      <div className="card-list">
        <CardList />
      </div>
    </>
  );
};

Content.propTypes = {
  deleteCard: PropTypes.func,
  createCard: PropTypes.func,
  isReadOnly: PropTypes.bool,
};

export default Content;
