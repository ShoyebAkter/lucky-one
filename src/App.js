import './App.css';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <div className='header'>
      <h2>Player selection</h2>
      <h3>Choose 4 players</h3>
      </div>
      <Shop></Shop>
    </div>
  );
}

export default App;
