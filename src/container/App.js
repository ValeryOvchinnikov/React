import React, { PureComponent } from 'react';
import Content from '../components/Content';
import Header from '../components/Header';
import { CardsContextProvider } from '../context/card-context';

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <CardsContextProvider>
          <Header />
          <Content />
        </CardsContextProvider>
      </div>
    );
  }
}
export default App;
