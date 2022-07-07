import logo from './logo.svg';
import './App.css';
import Greet from './Components/greet';
import Welcome from './Components/welcome';
import Hello from './Components/hello';

function App() {
  return (
    <div className="App">
      <Greet name="Venkat" job="Developer">
        <h3>This is a child property (props)</h3>
      </Greet>
      <Greet name="Sadik" job="React Developer">
        <button>Action</button>
      </Greet>
      <Greet name="Bhargav" job="UI Developer" />
      <Welcome /> 
      <Hello />
    </div>
  );
}

export default App;