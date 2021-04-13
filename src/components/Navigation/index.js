import { connect } from 'react-redux';
import Navigation from './Navigation';
import { logOut } from '../../store/reducers/authReducer';

const mapDispatchToProps = {
  logOut,
};

export default connect(null, mapDispatchToProps)(Navigation);
