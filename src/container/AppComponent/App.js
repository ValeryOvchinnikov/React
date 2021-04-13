import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Content from '../../components/Content';
import Header from '../../components/Header';
import NotFound from '../../components/NotFound';
import SignIn from '../../components/SignIn';
import SingleCard from '../../components/Content/SingleCard';
import Settings from '../../components/Settings';

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
          <Route path="/settings" exact component={Settings} />
          <Route path="/card/:id" exact component={SingleCard} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  fetchProducts: PropTypes.func,
};

export default App;
