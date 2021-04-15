import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Content from '../../components/Content';
import Header from '../../components/Header';
import NotFound from '../../components/NotFound';
import SignIn from '../../components/SignIn';
import SingleCard from '../../components/Content/SingleCard';
import Settings from '../../components/Settings';
import { fetchCards } from '../../store/actions/cardActions';
import { authorize } from '../../store/reducers/authReducer';

const App = ({ auth }) => {
  const dispatch = useDispatch();
  const getStatus = state => state.cards.status;
  const cardStatus = useSelector(getStatus);

  useEffect(() => {
    if (cardStatus === 'idle') {
      dispatch(fetchCards());
    }
  }, [cardStatus]);

  const token = JSON.parse(localStorage.getItem('auth-token'));

  useEffect(() => {
    if (token) {
      auth(token.authData);
    }
  }, []);

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
};
App.propTypes = {
  auth: PropTypes.func,
};

const mapDispatchToProps = {
  auth: authorize,
};
export default connect(null, mapDispatchToProps)(App);
