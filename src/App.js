import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";

function App() {
  const cardStyle = {
    margin: "2%",
  };
  return (
    <div className="App">
      <Header />
      <div style={cardStyle}>
        <Card />
      </div>
    </div>
  );
}

export default App;
