import { connect } from 'react-redux';
import App from './App';
import { authorize } from '../../store/reducers/authReducer';

const mapDispatchToProps = {
  authorize,
};
export default connect(null, mapDispatchToProps)(App);
