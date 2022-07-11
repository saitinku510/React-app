import logo from './logo.svg';
import './App.css';
import './appStyles.css'
import Greet from './Components/greet';
import Welcome from './Components/welcome';
import Hello from './Components/hello';
import Message from './Components/message'
import FunctionClick from './Components/functionClick'
import ClassClick from './Components/classClick'
import EventBind from './Components/eventBind'
import ParentComponent from './Components/parentComponent'
import UserGreeting from './Components/userGreeting'
import NameList from './Components/nameList'
import Stylesheet from './Components/Stylesheet'
import Inline from './Components/inline'
import Form from './Components/form'
import style from "./appStyles.module.css";
import LifeCycleA from './Components/lifeCycleA'
import Fragments from './Components/Fragments'
import Table from './Components/table'
import PureComp from './Components/pureComponent'
import RegularComp from './Components/RegularComp'
import ParentComp from './Components/ParentComp'

function App() {
  
  return (
    <div className="App">
      {/* <h1 className={'red'}>Mine</h1>
      <h1 className={style.green}>Mining</h1> */}
      {/* <Greet name="Venkat" job="Developer">
        <h3>This is a child property (props)</h3>
      </Greet>
      <Greet name="Sadik" job="React Developer">
        <button>Action</button>
      </Greet>
      <Welcome name="Venkat" job="Developer" /> 
      <Welcome name="Bhargav" job="UI Developer" /> 
      <Hello /> */}
      {/* <Greet name="Bhargav" job="UI Developer" /> */}
      {/* <Welcome name="Sadik" job="React Developer" />  */}
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      {/* <NameList /> */}
      {/* <Stylesheet primary={true}/> */}
      {/* <Inline /> */}
      {/* <Form /> */}
      {/* <LifeCycleA /> */}
      {/* <Fragments /> */}
      {/* <Table /> */}
      {/* <PureComp /> */}
      {/* <RegularComp /> */}
      <ParentComp />
    </div>
  );
}



export default App;