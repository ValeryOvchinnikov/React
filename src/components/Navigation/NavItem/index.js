import { connect } from 'react-redux';
import NavItem from './NavItem';
import { logOut } from '../../../store/reducers/authReducer';

const mapDispatchToProps = {
  logOut,
};
export default connect(null, mapDispatchToProps)(NavItem);
