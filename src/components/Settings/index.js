import { connect } from 'react-redux';
import Settings from './Settings';
import { switchReadOnly } from '../../store/reducers/cardReducer';

const mapStateToProps = state => ({
  isReadOnly: state.cards.isReadOnly,
});
const mapDispatchToProps = {
  switchReadOnly,
};
export default connect(mapStateToProps, mapDispatchToProps)(Settings);
