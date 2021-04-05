import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import Content from '../components/Content';
import Header from '../components/Header';
import { CardContextProvider } from '../context/card-context';
import NotFound from '../components/NotFound';
import SignIn from '../components/SignIn';

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <CardContextProvider>
          <Header />
          <Switch>
            <Route path="/sign-in" exact component={SignIn} />
            <Route path="/" exact component={Content} />
            <Route component={NotFound} />
          </Switch>
        </CardContextProvider>
      </div>
    );
  }
}
export default App;
