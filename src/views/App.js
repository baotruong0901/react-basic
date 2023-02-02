import logo from './logo.svg';
import './App.scss';
import MyComponent from './example/MyComponent.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          HELLO MY FIRST REACT
        </p>
        <MyComponent></MyComponent>
      </header>
    </div>
  );
}

export default App;
