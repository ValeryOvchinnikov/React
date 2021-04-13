import { connect } from 'react-redux';
import CardList from './CardList';

const mapStateToProps = state => ({
  cards: state.cards.cards,
});
export default connect(mapStateToProps)(CardList);
