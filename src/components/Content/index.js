import { connect } from 'react-redux';
import Content from './Content';
import { createCard, deleteCard } from '../../store/actions/cardActions';

const mapStateToProps = state => ({
  isReadOnly: state.isReadOnly,
});
const mapDispatchToProps = {
  createCard,
  deleteCard,
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
