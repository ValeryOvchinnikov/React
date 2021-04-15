import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyledCheckbox, StyledDiv } from '../Content/StyledComponent/Controls';
import { switchReadOnly } from '../../store/reducers/cardReducer';

const Settings = ({ isReadOnly, switchReadOnlyMode }) => (
  <StyledDiv>
    <StyledCheckbox
      id="read-only"
      type="checkbox"
      checked={isReadOnly}
      onChange={switchReadOnlyMode}
    />

    <label htmlFor="read-only">Read-Only</label>
  </StyledDiv>
);

Settings.propTypes = {
  isReadOnly: PropTypes.bool,
  switchReadOnlyMode: PropTypes.func,
};

const mapStateToProps = state => ({
  isReadOnly: state.cards.isReadOnly,
});
const mapDispatchToProps = {
  switchReadOnlyMode: switchReadOnly,
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
