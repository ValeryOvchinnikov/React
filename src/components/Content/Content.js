import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createCard, deleteCard } from '../../store/reducers/cardReducer';

import { StyledDiv, StyledButton } from './StyledComponent/Controls';
import CardList from './CardList';

import './Content.css';

const Content = ({ onDeleteCard, onCreateCard, isReadOnly }) => {
  return (
    <>
      {!isReadOnly && (
        <StyledDiv>
          <StyledButton onClick={onDeleteCard}>Delete selected cards</StyledButton>
          <StyledButton onClick={onCreateCard}>Create new card</StyledButton>
        </StyledDiv>
      )}

      <div className="card-list">
        <CardList />
      </div>
    </>
  );
};

Content.propTypes = {
  onDeleteCard: PropTypes.func,
  onCreateCard: PropTypes.func,
  isReadOnly: PropTypes.bool,
};

const mapStateToProps = state => ({
  isReadOnly: state.cards.isReadOnly,
});
const mapDispatchToProps = {
  onCreateCard: createCard,
  onDeleteCard: deleteCard,
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
