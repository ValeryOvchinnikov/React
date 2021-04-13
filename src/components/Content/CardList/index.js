import { connect } from 'react-redux';
import CardList from './CardList';

const mapStateToProps = state => ({
  cards: state.cards,
});
export default connect(mapStateToProps)(CardList);
