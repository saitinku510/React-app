import logo from './logo.svg';
import './App.css';
import Greet from './Components/greet';
import Welcome from './Components/welcome';
import Hello from './Components/hello';
import Message from './Components/message'
// import Counter from './Components/counter'

function App() {
  return (
    <div className="App">
      {/* <Greet name="Venkat" job="Developer">
        <h3>This is a child property (props)</h3>
      </Greet>
      <Greet name="Sadik" job="React Developer">
        <button>Action</button>
      </Greet>
      <Welcome name="Venkat" job="Developer" /> 
      <Welcome name="Bhargav" job="UI Developer" /> 
      <Welcome name="Sadik" job="React Developer" /> 
      <Hello /> */}
      <Greet name="Bhargav" job="UI Developer" />
      {/* <Message /> */}
      {/* <Counter /> */}
    </div>
  );
}

export default App;