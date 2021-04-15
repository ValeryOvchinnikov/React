import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavItem.css';
import PropTypes from 'prop-types';

const NavItem = ({ onClick, children, link }) => (
  <NavLink
    onClick={onClick || null}
    className="nav-link"
    activeClassName="nav-link-active"
    to={link || '/'}
  >
    {children}
  </NavLink>
);

NavItem.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.string,
  onClick: PropTypes.func,
};

export default React.memo(NavItem);
