import Card from './components/Card';
import Header from './components/Header';

const App = () => {
    const cardStyle = {
        margin: '2%',
    };
    return (
        <div className="App">
            <Header />
            <div style={cardStyle}>
                <Card title="Card Name" text="Text" />
            </div>
        </div>
    );
};

export default App;
