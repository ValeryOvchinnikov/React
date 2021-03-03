import React from 'react';
import Cards from './components/Cards';
import Header from './components/Header';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                { id: 0, title: 'Card 1', text: 'text' },
                { id: 1, title: 'Card 2', text: 'text' },
                { id: 2, title: 'Card 3', text: 'text' },
                { id: 3, title: 'Card 4', text: 'text' },
                { id: 4, title: 'Card 5', text: 'text' },
                { id: 5, title: 'Card 6', text: 'text' },
                { id: 6, title: 'Card 7', text: 'text' },
            ],
        };
    }

    render() {
        return (
            <div className="App">
                <Header />
                <Cards cards={this.state.cards} />
            </div>
        );
    }
}
export default App;
