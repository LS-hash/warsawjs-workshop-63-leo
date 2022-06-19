import logo from './logo.svg';
import './App.css';
import Text from './components/Text';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Text text ='hello' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Text text ='value' />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
