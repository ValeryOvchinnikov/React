import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavItem.css';
import PropTypes from 'prop-types';

const NavItem = props => {
  const { children, link } = props;
  return (
    <NavLink className="nav-link" activeClassName="nav-link-active" to={link}>
      {children}
    </NavLink>
  );
};
NavItem.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
};
export default React.memo(NavItem);
