import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Content from '../components/Content';
import Header from '../components/Header';
import NotFound from '../components/NotFound';
import SignIn from '../components/SignIn';
import { fetchProducts } from '../reducers/reducer';
import Card from '../components/Content/CardList/Card/Card';

class App extends PureComponent {
  componentDidMount() {
    const { fetchProducts } = this.props;
    fetchProducts();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/sign-in" exact component={SignIn} />
          <Route path="/" exact component={Content} />
          <Route
            path="/:id"
            exact
            render={({ match }) => {
              const { cards } = this.props;
              const card = cards.find(c => c.id === match.params.id);
              if (!card) {
                return <p>Card not found</p>;
              }
              return (
                <Card
                  id={card.id}
                  title={card.title}
                  text={card.text}
                  selected={card.selected}
                  byId
                />
              );
            }}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchProducts,
};

const mapStateToProps = state => ({
  cards: state.cards,
});

App.propTypes = {
  fetchProducts: PropTypes.func,
  cards: PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
