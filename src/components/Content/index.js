import { connect } from 'react-redux';
import Content from './Content';
import { createCard, deleteCard } from '../../store/reducers/cardReducer';

const mapStateToProps = state => ({
  isReadOnly: state.cards.isReadOnly,
});
const mapDispatchToProps = {
  createCard,
  deleteCard,
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
