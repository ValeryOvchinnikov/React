import React from 'react';
import PropTypes from 'prop-types';
import { StyledCheckbox, StyledDiv } from '../Content/StyledComponent/Controls';

const Settings = ({ isReadOnly, switchReadOnly }) => (
  <StyledDiv>
    <StyledCheckbox
      id="read-only"
      type="checkbox"
      checked={isReadOnly}
      onChange={switchReadOnly}
    />

    <label htmlFor="read-only">Read-Only</label>
  </StyledDiv>
);

Settings.propTypes = {
  isReadOnly: PropTypes.bool,
  switchReadOnly: PropTypes.func,
};

export default Settings;
