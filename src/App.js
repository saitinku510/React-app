import logo from './logo.svg';
import './App.css';
import Greet from './Components/greet';
import Welcome from './Components/welcome';
import Hello from './Components/hello';
import Message from './Components/message'

function App() {
  return (
    <div className="App">
      {/* <Greet name="Venkat" job="Developer">
        <h3>This is a child property (props)</h3>
      </Greet>
      <Greet name="Sadik" job="React Developer">
        <button>Action</button>
      </Greet>
      <Greet name="Bhargav" job="UI Developer" />
      <Welcome name="Venkat" job="Developer" /> 
      <Welcome name="Bhargav" job="UI Developer" /> 
      <Welcome name="Sadik" job="React Developer" /> 
      <Hello /> */}
      <Message />
    </div>
  );
}

export default App;