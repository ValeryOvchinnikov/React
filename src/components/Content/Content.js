import React from 'react';
import { StyledDiv, StyledButton, StyledCheckbox } from './Controls';
import { CardContextConsumer } from '../../context/card-context';
import CardList from './CardList';
import './Content.css';

const Content = () => (
  <CardContextConsumer>
    {({
      cards,
      isReadOnly,
      selectCardHandler,
      addCardHandler,
      deleteCardHandler,
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
          <StyledButton onClick={addCardHandler}>Create new card</StyledButton>
        </StyledDiv>

        <div className="card-list">
          <CardList
            isReadOnly={isReadOnly}
            cards={cards}
            checkedForDelete={selectCardHandler}
          />
        </div>
      </>
    )}
  </CardContextConsumer>
);

export default Content;
