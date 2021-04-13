import { connect } from 'react-redux';
import App from './App';
import { fetchProducts } from '../../store/actions/cardActions';

const mapDispatchToProps = {
  fetchProducts,
};

const mapStateToProps = state => ({
  cards: state.cards,
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
