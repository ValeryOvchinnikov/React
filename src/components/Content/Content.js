import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { StyledDiv, StyledButton, StyledCheckbox } from './Controls';
import { createCard, deleteCard, switchReadOnly } from '../../store/actions/actions';
import CardList from './CardList';

import './Content.css';

const Content = ({ isReadOnly, switchReadOnly, deleteCard, createCard }) => {
  return (
    <>
      <StyledDiv>
        <StyledCheckbox
          id="read-only"
          type="checkbox"
          checked={isReadOnly}
          onChange={switchReadOnly}
        />

        <label htmlFor="read-only">Read-Only</label>

        <StyledButton onClick={deleteCard}>Delete selected cards</StyledButton>
        <StyledButton onClick={createCard}>Create new card</StyledButton>
      </StyledDiv>

      <div className="card-list">
        <CardList />
      </div>
    </>
  );
};
Content.propTypes = {
  isReadOnly: PropTypes.bool,
  switchReadOnly: PropTypes.func,
  deleteCard: PropTypes.func,
  createCard: PropTypes.func,
};
const mapStateToProps = state => ({
  isReadOnly: state.isReadOnly,
});
const mapDispatchToProps = {
  createCard,
  deleteCard,
  switchReadOnly,
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
