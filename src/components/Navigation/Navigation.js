import React from 'react';
import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import NavItem from './NavItem';
import './Navigation.css';
import { logOut } from '../../store/reducers/authReducer';

const Navigation = ({ onLogOut }) => {
  const getRole = state => state.auth.currentUser.role;
  const role = useSelector(getRole);
  const getAuthStatus = state => state.auth.isAuth;
  const authStatus = useSelector(getAuthStatus);

  return (
    <ul className="nav">
      <li className="nav-item">
        <NavItem link="/">Home</NavItem>
      </li>

      {role === 'admin' && (
        <li className="nav-item">
          <NavItem link="/settings">Settings</NavItem>
        </li>
      )}

      {!authStatus ? (
        <li className="nav-item">
          <NavItem link="/sign-in">Sign In</NavItem>
        </li>
      ) : (
        <li className="nav-item">
          <NavItem link={null} onClick={onLogOut}>
            LogOut
          </NavItem>
        </li>
      )}
    </ul>
  );
};

Navigation.propTypes = {
  onLogOut: PropTypes.func,
};

const mapDispatchToProps = {
  onLogOut: logOut,
};

export default connect(null, mapDispatchToProps)(Navigation);
