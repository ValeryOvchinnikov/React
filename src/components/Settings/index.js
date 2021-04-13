import { connect } from 'react-redux';
import Settings from './Settings';
import { switchReadOnly } from '../../store/actions/cardActions';

const mapStateToProps = state => ({
  isReadOnly: state.isReadOnly,
});
const mapDispatchToProps = {
  switchReadOnly,
};
export default connect(mapStateToProps, mapDispatchToProps)(Settings);
