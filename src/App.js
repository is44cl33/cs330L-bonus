import './App.css';
import Navbar from './Navbar';
import Card from './Card';

function App() {
  return (
    <>
      <Navbar />
      <main className="App" id="home">
        <h1>CS 330L</h1>
        <h2>Section - 011</h2>
        <p>WVU ID: 800478227</p>
        <p>Hi I am Isaac</p>
        <p>These are three of my favorite games.</p>
      </main>
      <Card />
    </>
  );
}

export default App;
