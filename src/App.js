import './App.css';
import Card from './components/Card';
import logo from './logo.svg';

function App() {
  const card1 = {
    title: "Card title",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    button: "Go somewhere"
  }
  const card2 = {
    title: "Special title treatment",
    text: "with supporting text below as  natural lead-in to additional content.",
    button: "Go somewhere"
  }
  return (
    <>
    <Card {...card1}>
      <img src={logo} className="card-img-top" alt="..."/>
    </Card>
    
    <Card {...card2} />
    </>
  );
}

export default App;
