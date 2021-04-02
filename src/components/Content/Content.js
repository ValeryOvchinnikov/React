import React from 'react';
import { StyledDiv, StyledButton, StyledCheckbox } from './Controls';
import CardContext from '../../context/card-context';
import CardList from './CardList';
import './Content.css';

const Content = () => (
  <CardContext.Consumer>
    {({
      cards,
      createCardHandler,
      deleteCardHandler,
      isReadOnly,
      switchReadOnly,
    }) => (
      <>
        <StyledDiv>
          <StyledCheckbox
            id="read-only"
            type="checkbox"
            checked={isReadOnly}
            onChange={switchReadOnly}
          />

          <label htmlFor="read-only">Read-Only</label>

          <StyledButton onClick={deleteCardHandler}>
            Delete selected cards
          </StyledButton>
          <StyledButton onClick={createCardHandler}>Create new card</StyledButton>
        </StyledDiv>

        <div className="card-list">
          <CardList cards={cards} />
        </div>
      </>
    )}
  </CardContext.Consumer>
);

export default React.memo(Content);
