// import logo from './logo.svg';
import './App.css';
import PureCompo from './HOC&PureCompo/PureCompo';
import HOC from './HOC&PureCompo/HOC';
import HOCCall from './HOC&PureCompo/HOCCall';
import { HOCCallblue } from './HOC&PureCompo/HOCCall';
import '../src/style.css'

function App() {
  return (
    <div className="App">
      <PureCompo />
      <HOC />
      <HOCCall value ={HOC}/>
      <HOCCallblue value={HOC}/>
      
    </div>
  );
}

export default App;
