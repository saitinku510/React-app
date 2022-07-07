import logo from './logo.svg';
import './App.css';
import Greet from './Components/greet';
import Welcome from './Components/welcome';
import Hello from './Components/hello';

function App() {
  return (
    <div className="App">
      <Greet name="Venkat" job="Developer"/>
      <Greet name="Sadik" job="React Developer" />
      <Greet name="Bhargav" job="UI Developer" />
      <Welcome /> 
      <Hello />
    </div>
  );
}

export default App;