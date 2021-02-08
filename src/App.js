import logo from './logo.svg';
import './App.css';
import RecordPlayer from './components/RecordPlayer/RecordPlayer'
import ControlPad from './components/ControlPad/ControlPad'


function App() {
  return (
    <div className="App">
      <RecordPlayer />
      <ControlPad />
    </div>
  );
}

export default App;
