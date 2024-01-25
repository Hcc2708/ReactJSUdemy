import logo from './logo.svg';
import './App.css';
import Counting from './components/Counting';
import ContextApi from './components/ContexApi';
// import { createContext } from 'react';
// import ContextApi from './components/ContexApi';

function App() {
  let obj = {
    cnt : 1
  };
  // let Context = createContext(count)
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <button onClick={()=>(obj.cnt)++}>ChangeVal</button>
      <ContextApi.Provider value={obj}><Counting/></ContextApi.Provider>
    </div>
  );
}

export default App;
