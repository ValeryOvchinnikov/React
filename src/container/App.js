import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Content from '../components/Content';
import Header from '../components/Header';
import NotFound from '../components/NotFound';
import SignIn from '../components/SignIn';
import { fetchProducts } from '../reducers/reducer';
import SingleCard from '../components/Content/CardList/SingleCard';

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
          <Route path="/:id" exact component={SingleCard} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchProducts,
};
App.propTypes = {
  fetchProducts: PropTypes.func,
};
export default connect(null, mapDispatchToProps)(App);
